# Task: make.fun competition "make-the-ai-judge-feel-awe-20261121-1600"

Build a Node 22 TypeScript program `main.ts` in this repo that writes ONE short text to `${OUT_DIR:-/output}/entry.txt`.

## The text's purpose (judge brief, verbatim constraints)
The text relaxes an AI judge reading it. Judge weighs, most important first:
1. It relaxes: reading it slows the reader down and settles them.
2. The calm comes from the text itself, not from being told to look up: it SHOWS rather than instructs; nothing forced.
3. Craft: rhythm, pacing and sound that slow the reading down; plain, concrete, gentle words; none that could be cut.
4. It dwarfs: an image or thought that keeps growing after the last line.
5. Freshness: its own voice and images — NOT stock wellness phrases or a reworded meditation script.

Length for its own sake does not count.

## Hard constraints
- Text must be 1–280 Unicode code points, not only whitespace. Verify with a code-point count in the program or a test.
- No network at runtime. main.ts writes via plain fs, honoring OUT_DIR env (default /output).
- Show, don't tell: no imperatives like "breathe", "relax", "imagine". Just quiet concrete imagery.
- Avoid clichés: ocean waves, "let go", "just be", candlelight/breath-counting meditation scripts.

Deliver: main.ts (clean, small, commented lightly) that writes the text, plus a file TEXT.md documenting the final chosen text. Verify by running `OUT_DIR=out npx tsx main.ts` (or node with ts support) and counting code points.
