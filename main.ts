// Two Robots in an Elevator (R3) — writes the entry line to /output/entry.txt
// One line, 118 characters, a robot making small talk about weather it cannot see.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outText = line + "\n";
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, outText, "utf8");
console.log(`entry (${line.length} chars) -> ${outFile}`);
