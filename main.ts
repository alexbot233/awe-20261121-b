import * as fs from "node:fs";
import * as path from "node:path";

// One quiet image: a hand's-width gap that keeps opening after the last line.
const ENTRY: string =
  "Late. One lamp still on in a row of dark windows. " +
  "In one of them, a curtain drawn a hand's width aside, " +
  "and the sky in the gap between cloth and glass. The whole sky. It has been there all along.";

// Spread counts Unicode code points, not UTF-16 code units.
const codePoints: string[] = [...ENTRY];
const count: number = codePoints.length;

if (count < 1 || count > 280 || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1-280 non-whitespace code points, got ${count}`);
}

const outDir: string = process.env.OUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");

console.log(`entry.txt: ${count} code points`);
