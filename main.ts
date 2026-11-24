// Forecast for a city that only exists on a good morning commute.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Skytown forecast: a gentle rain of confetti, tailwinds on every platform, and your train arriving exactly when you do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
process.stdout.write(ENTRY + "\n");
