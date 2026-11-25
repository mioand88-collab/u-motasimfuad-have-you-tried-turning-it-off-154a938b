// Have You Tried Turning It Off? — make.fun entry
// Writes one funny line from a hopeless tech support agent to a
// desperate customer into $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I know your deadline's in an hour, so let's cut to the chase: have you tried turning it off and on again? I haven't — mine's been on since 2019 and I'm scared to touch it.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 199 || text.trim().length === 0) {
    throw new Error(
      `entry must be 1-199 non-whitespace characters, got ${text.length}`,
    );
  }
}

function writeEntry(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
  validate(LINE);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

writeEntry();
