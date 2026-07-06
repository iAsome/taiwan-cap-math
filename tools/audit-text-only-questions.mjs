import fs from "node:fs";
import path from "node:path";
import {
  SUBJECTS,
  collectQuestions,
  loadTextOnlyStack,
  loadSubject,
  questionBlob,
  root
} from "./text-only-audit-lib.mjs";

const notesDir = path.join(root, "developer-notes", "text-only-image-policy");
fs.mkdirSync(notesDir, { recursive: true });

const stack = loadTextOnlyStack();
const imageDependent = [];
const symbolClarity = [];
const symbolAssignRe = /(^|[\s\u3002\uff0c\uff1b;,.??!?])([xyhrlmnkabc])\s*[=?]/;

for (const sub of SUBJECTS) {
  const w = loadSubject(sub, stack);
  const items = collectQuestions(w, sub.code);
  const seenImage = new Set();
  const seenSymbol = new Set();

  for (const { source, q } of items) {
    const out = stack.TEXT_ONLY_POLICY.normalizeQuestion({ ...q }, sub.code);
    const key = `${sub.code}:${source}:${q.taxonomyKey || ""}:${q.text || ""}`;
    if (out.visualTextStatus === "needs-text" && !seenImage.has(key)) {
      seenImage.add(key);
      imageDependent.push({
        subject: sub.code,
        source,
        taxonomyKey: q.taxonomyKey || "",
        visualPolicy: out.visualPolicy,
        visualTextStatus: out.visualTextStatus,
        pausedReason: out.pausedReason,
        text: String(q.text || "").slice(0, 240)
      });
    }

    if (sub.code !== "math") continue;
    const text = questionBlob(q);
    if (!symbolAssignRe.test(text) || out.symbolNotes?.length) continue;
    if (seenSymbol.has(key)) continue;
    seenSymbol.add(key);
    symbolClarity.push({
      subject: "math",
      source,
      taxonomyKey: q.taxonomyKey || "",
      reason: "explicit-symbol-assignment-without-symbolNotes",
      text: String(q.text || "").slice(0, 240)
    });
  }
}

fs.writeFileSync(path.join(notesDir, "image-dependent-audit.json"), `${JSON.stringify(imageDependent, null, 2)}\n`, "utf8");
fs.writeFileSync(path.join(notesDir, "symbol-clarity-audit.json"), `${JSON.stringify(symbolClarity, null, 2)}\n`, "utf8");

console.log(`OK: wrote ${imageDependent.length} image-dependent item(s), ${symbolClarity.length} symbol-clarity item(s).`);
