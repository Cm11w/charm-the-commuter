import { mkdirSync, writeFileSync } from "node:fs";

// One line, 140 characters max: a weather forecast for a city that does
// not exist. The joke is the sunshine — it is scheduled, like a delayed
// train, for a date that keeps getting postponed, which is exactly how a
// commuter at a rainy bus stop already feels about the morning. The line keeps the rhythm of
// broadcast weather ("Today in Cloudwick: 11°C, drizzle all day") and
// the twist lands on the last words. The city is invented, the weather
// is concrete, and the file holds exactly this line: no trailing newline,
// so the gate counts the line alone.
const LINE =
  "Today in Cloudwick: 11°C, drizzle all day, and sunshine scheduled for a date that keeps getting postponed.";

// No network, no randomness, no environment reads: the same bytes every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
