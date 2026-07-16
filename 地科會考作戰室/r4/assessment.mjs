function seedNumber(value) {
  let hash = 2166136261;
  for (const character of String(value)) {
    hash ^= character.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function random(seed) {
  let state = seedNumber(seed);
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function deterministicOrder(ids, seed) {
  const result = [...ids];
  const next = random(seed);
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(next() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

export function selectReviewedQuestionIds(unit, seed, count = 20) {
  const skillIds = unit.skills.flatMap((skill) => [...skill.questionIds, ...(skill.stimulusQuestionIds ?? [])]);
  return deterministicOrder(skillIds, `${unit.id}:${seed}`).slice(0, Math.min(count, skillIds.length));
}
