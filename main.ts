import { mkdirSync, writeFileSync } from "node:fs";

// Breakup text from a self-aware smart toaster at breakfast: three beats
// in appliance logic (dial cranked to 7, blamed for the smoke alarm,
// takes the crumb tray), ending on the lever as the flat goodbye.
const line =
  "It's not you, it's the browning dial — you cranked me to 7 every morning, then blamed me for the smoke alarm. I'm taking the crumb tray. Don't text; my lever is up for good.";

// Validate: gate requires 1-280 characters, non-blank, one line.
const count = [...line].length;
if (count < 1 || count > 280) {
  throw new Error(`line is ${count} code points, must be 1-280`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
