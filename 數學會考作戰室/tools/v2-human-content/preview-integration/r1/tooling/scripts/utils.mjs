import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
export const readJson = file => JSON.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
export const writeJson = (file, value) => { fs.mkdirSync(path.dirname(file), {recursive:true}); fs.writeFileSync(file, JSON.stringify(value,null,2)+"\n"); };
export const sha256 = file => crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
export const listFiles = root => fs.existsSync(root) ? fs.readdirSync(root,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?listFiles(path.join(root,entry.name)):[path.join(root,entry.name)]) : [];
export const parseArgs = argv => Object.fromEntries(argv.slice(2).map((value,index,array)=>value.startsWith("--")?[value.slice(2),array[index+1]]:null).filter(Boolean));
export const assert = (value,message) => { if(!value) throw new Error(message); };
