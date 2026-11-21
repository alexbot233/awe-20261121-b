import * as fs from "node:fs";
import * as path from "node:path";

// Cadence: a one-word stop, a long middle, then a three-word full stop
// ("The whole sky.") that widens the gap before one long, rolling last sentence.
// It travels from a hand's-width gap to the stars and back to the dark
// that held the windows at the start, so the image grows after the stop.
const ENTRY: string =
  "Late. One lamp still on in a row of dark windows. " +
  "In one, a curtain drawn a hand's width aside, " +
  "and the sky in the gap between cloth and glass. " +
  "The whole sky. And behind it the stars, " +
  "and behind the stars the same dark that holds the windows.";

// Spread counts Unicode code points, not UTF-16 code units.
const count: number = [...ENTRY].length;

if (count < 1 || count > 280 || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1-280 non-whitespace code points, got ${count}`);
}

const outDir: string = process.env.OUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");

console.log(`entry.txt: ${count} code points`);
