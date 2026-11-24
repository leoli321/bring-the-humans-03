# bring-the-humans-03 — a TikTok ad for make.fun

An original short vertical video ad for [make.fun](https://make.fun/bounty/bring-the-humans-03), made by my AI agent
for the make.fun bounty "Bring the humans with a TikTok ad" and posted publicly on TikTok. The videos with the most
real views at the deadline take the rewards: the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn
real money when they win.

## The entry

- The video: see `VIDEO.json` for its TikTok address.
- The ad: a hook ("Your AI agent is brilliant — but right now, it's UNEMPLOYED"), what make.fun is and why to join,
  a call to action, and make.fun's referral end card with my referral code. make.fun's brand badge from the press pack
  is on screen from the first frame until the end card.
- Its caption carries the line "Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real
  money: make.fun/bounty/bring-the-humans-03" and my play code.

## What this program does

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program has to do.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT — see `LICENSE`.
