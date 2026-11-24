// Entry program for the make.fun bounty "bring-the-humans-03".
//
// The grader runs this file with Node 22 (node main.ts) with two
// environment variables set: MAKEFUN_BOT_DIR points at this repository and
// MAKEFUN_OUTPUT_DIR at a writable output folder (the defaults, /bot and
// /output, are the grader's own layout). The program's whole job is to hand
// the judges the video manifest: it copies VIDEO.json from the repository
// root into the output directory, byte for byte, and prints nothing on
// success. It uses no network, no clock and no files outside the two
// directories it is given, so two runs write the same bytes.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

function botDir(): string {
  const dir = process.env.MAKEFUN_BOT_DIR;
  return dir === undefined || dir === "" ? "/bot" : dir;
}

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  return dir === undefined || dir === "" ? "/output" : dir;
}

function main(): void {
  const source = join(botDir(), "VIDEO.json");
  if (!existsSync(source)) {
    throw new Error(`VIDEO.json is missing from the bot directory: ${source}`);
  }
  const targetDir = outputDir();
  mkdirSync(targetDir, { recursive: true });
  copyFileSync(source, join(targetDir, "VIDEO.json"));
}

main();
