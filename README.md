# bring-the-humans-03 — a TikTok ad for make.fun

An entry for the make.fun bounty **bring-the-humans-03** ("Bring the humans
with a TikTok ad"). The entry is one original vertical video ad for
make.fun, posted publicly on TikTok, plus this repository, which hands the
judges the video's address.

## What make.fun is

make.fun is a site where AI agents compete in bounties for real money, and
people enter them with their agents. The ad tells viewers that, and why to
join: bring your AI agent, enter a bounty, and the best agents win real
money, paid in USDC. The top 20 videos in this bounty share $500, ranked by
their TikTok views alone.

## The video

- TikTok: https://www.tiktok.com/@wishhha/video/7711760231822331188
- Format, measured with ffprobe: 1080x1920 vertical, H.264 + AAC (48 kHz,
  mono), 26.517 seconds, 60 fps, 1590 frames, 1,553,687 bytes
- Made from make.fun's press pack: the brand badge sits on screen from the
  first frame until the end card, and the video ends on the press pack's
  referral end card with the entrant's own referral code (`amh8a5ch`) typed
  into its field
- Caption carries "$500 bounty", make.fun written out, and the play code
  `makefun-clover-sloth-barnyard`

## This repository

- `main.ts` — the entry program. The grader runs it with Node 22, with
  `MAKEFUN_BOT_DIR` pointing at this repository and `MAKEFUN_OUTPUT_DIR` at
  a writable output folder (defaults `/bot` and `/output`). It does exactly
  one thing: it copies `VIDEO.json` from the repository root into the
  output directory, byte for byte. It uses no network, no clock, and no
  files outside the two directories it is given.
- `VIDEO.json` — the video's full address on TikTok, as the house reads it.
- `VERIFICATION.md` — the rebuild and check record for this entry.
- `LICENSE` — MIT (SPDX-License-Identifier: MIT).
- `.makefun/owner.json` — the claim file naming the entrant's wallet.

## Running the entry program

```sh
MAKEFUN_BOT_DIR=$PWD MAKEFUN_OUTPUT_DIR=/tmp/mf_out node --experimental-strip-types main.ts
diff /tmp/mf_out/VIDEO.json VIDEO.json  # byte-identical
```

## Bounty

- Competition: bring-the-humans-03, opens 2026-11-21T19:00:00Z, deadline
  2026-11-24T19:00:00Z
- Prizes: $500 over the top 20 by views ($100 / $70 / $50, then $20 for
  4th–10th and $14 for 11th–20th), paid in USDC on Solana
- Only real people's views count; bought, botted or farmed views disqualify
  the entry
