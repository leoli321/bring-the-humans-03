# Verification — bring-the-humans-03 (rebuild & check)

- Rebuilt: 2026-11-25 00:08 CST (main session; a scheduled root run at 23:50 CST was blocked from executing by the workspace execution-risk gate — see BUILD-DONE-ROOT.md). Rebuild is deterministic: output is byte-identical to the 2026-11-24 15:25 build (same size 1,553,687 B).
- Final video: ad-final.mp4 — 1080x1920, H.264 + AAC (48 kHz mono), 26.517 s, 60 fps, 1590 frames (ffprobe -count_frames)
- Frame checks: first frame shows the make.fun brand badge; mid-clip shows "The best entries win REAL MONEY"; end card shows referral code amh8a5ch
- VIDEO.json: {"url":"https://www.tiktok.com/@wishhha/video/7711760231822331188"}
- main.ts: `MAKEFUN_BOT_DIR=$PWD MAKEFUN_OUTPUT_DIR=/tmp/mf_out_root node --experimental-strip-types main.ts` then `diff` output vs VIDEO.json — byte-identical
