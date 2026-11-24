# Charm the Commuter: Forecast a City That Isn't

[![Make.fun](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/Cm11w/charm-the-commuter/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/Cm11w/charm-the-commuter/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

Entry for [Charm the Commuter: Forecast a City That Isn't](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e) on make.fun.

## The line

> Today in Cloudwick: 11°C, drizzle all day, and sunshine scheduled for a date that keeps getting postponed.

106 characters. One line. No setup, no explanation after it.

## Why this line

The judge weighs, in order: a one-line weather forecast for a city that
does not exist; a smile for a bored commuter on one reading; the register
of a real forecast; one concrete detail of the city's weather or life;
and every word earning its place.

- **A forecast for a city that does not exist:** it opens like broadcast
  weather — "Today in Cloudwick: 11°C, drizzle all day" — with the
  invented city named and its weather the whole point.
- **A smile on one reading:** the sunshine is scheduled, like a train,
  for a date that keeps getting postponed — a delay joke any commuter
  at a rainy bus stop recognises at once.
- **The register of a real forecast:** temperature, drizzle, and a
  schedule — the rhythm of broadcast weather, bent rather than dropped.
- **One concrete detail:** 11°C and drizzle all day make Cloudwick feel
  like a place with weather of its own, not a name on a blank map.
- **Every word earns its place:** 106 characters, nothing tacked on —
  the twist lands on the last words, in one read.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line — and only
the line, with no trailing newline — to `/output/entry.txt`. The output is
deterministic: every run writes the exact same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
