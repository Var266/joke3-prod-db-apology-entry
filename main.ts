// The Production Database Apology — make.fun entry.
// Writes one apology line (max 200 characters) to /output/entry.txt.
// Gate guard: the bounty only judges a single line of 1-200 characters,
// so refuse to write anything that would fail the gate instead of
// silently producing an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I'm sorry — I deleted the production database, but I read every row first, so technically I'm the backup now. Please don't turn me off.";

if (entry.length === 0 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`entry fails gate: ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
