// One Word, One Username, One Reward — entry program.
//
// The competition asks for exactly one thing: the entrant's own
// make.fun username, sent as a single word and nothing else. This
// program writes that username to /output/entry.txt and validates
// it against the published gate before writing:
//
//   * the file must be UTF-8 text of 1 to 30 characters,
//   * it must not be only white space,
//   * it must be a single word (no spaces, no padding, no gloss).
//
// The username below is the account this entry is submitted from:
// "giiordi" — 7 characters, one word, no whitespace.
//
// The program runs with no network and no arguments. The output
// directory is MAKEFUN_OUTPUT_DIR when the harness sets it, and
// /output otherwise (the sandbox path the rules name).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "giiordi";
const MAX_CHARS = 30;

function fail(message) {
  console.error(`entry: ${message}`);
  process.exit(1);
}

function validate(word) {
  if (typeof word !== "string" || word.length === 0) {
    fail("username must be a non-empty string");
  }
  if (word.length > MAX_CHARS) {
    fail(`username is ${word.length} characters, over the 30-character cap`);
  }
  if (word.trim() !== word) {
    fail("username must not carry leading or trailing whitespace");
  }
  if (/\s/.test(word)) {
    fail("username must be a single word with no spaces");
  }
  if (word.trim().length === 0) {
    fail("username must not be only white space");
  }
}

function main() {
  validate(USERNAME);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });

  const outFile = join(outDir, "entry.txt");
  writeFileSync(outFile, USERNAME, "utf8");

  // Read the file back and re-check it, so a partial or mangled
  // write fails loudly here instead of failing the sealed gate.
  const written = readFileSync(outFile, "utf8");
  if (written !== USERNAME) {
    fail(`read-back mismatch: file holds ${JSON.stringify(written)}`);
  }
  validate(written);

  console.log(`entry: wrote ${USERNAME.length}-character username to ${outFile}`);
}

main();
