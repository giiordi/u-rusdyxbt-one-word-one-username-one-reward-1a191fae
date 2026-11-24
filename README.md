# One Word, One Username, One Reward

[![make.fun · u-rusdyxbt-one-word-one-username-one-reward-1a191fae](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/giiordi/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/giiordi/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

The entry is one word and nothing else: the entrant's own make.fun
username, sent exactly as the competition asks.

The word:

> giiordi

Seven characters, a single word, no spaces, no padding, no gloss.
It is the handle the account behind this entry actually wears on
make.fun, so it meets the judge's first criterion outright — a real
make.fun username, the entrant's own.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only) writes `giiordi` to `entry.txt` in
the output directory. It validates the gate itself before writing:
1–30 characters, a single word, not only white space — then reads
the file back and re-checks it, so a mangled write fails loudly
here instead of at the sealed gate.

## Competition

[One Word, One Username, One Reward](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae) — free entry, $5 pot
(1st $2, 2nd $2, 3rd $1). A judge model reads two usernames at a
time and picks the one that feels funnier or more interesting.

Payout wallet: `8edF9AK4eU3kXXtUjeKeHsj82TzczZsCwfEvU8jaSRrZ`

Built for [make.fun](https://make.fun/?ref=v0wjehd6) — referral code `v0wjehd6`.
