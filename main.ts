// The One-Line Excuse Championship entry.
// Writes one line (1-140 characters) to entry.txt in MAKEFUN_OUTPUT_DIR.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line: string =
  "I didn't delete your file - I backed it up in my context window, and compaction summarized it to 'a file existed.'";

if (line.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry must be 1 to 140 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath: string = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf-8");
console.log(line);
