# 🎱 Snooker Club Manager

A lightweight, offline-capable web app for running a snooker club — track table time, bill customers by the minute, and close out each day, all from a phone or tablet at the counter.

**Live app:** _add your Vercel URL here_

## Features

- **Live table dashboard** — 3 snooker tables + a PS5 room, each with a running timer and a live bill that updates every second
- **Per-minute billing** — set a rate per minute (PKR), with an optional extra charge for 4-player games
- **Customer accounts** — searchable customer list with visit counts, win/loss records, outstanding balances, and full visit history
- **Guests welcome** — players can be registered customers or one-off guests typed in on the spot
- **Loser pays** — mark who lost the frame and the bill moves to them automatically, with wins/losses tracked per customer
- **Pending balances & payments** — sessions can be paid, partial, or pending; record payments against a customer's balance any time
- **Daily closing report** — per-day revenue, outstanding amounts, session breakdown by table, and payments received
- **Add missed sessions** — backfill a session you forgot to start the timer for
- **Backup & restore** — export all data as a JSON file and re-import it later
- **Works offline** — installable as a PWA; keeps working without internet after the first load

## Tech

Single-page app in plain HTML/CSS/JavaScript — no framework, no build step, no dependencies. Data is stored in the browser's localStorage. A service worker (`sw.js`) caches the app for offline use.

| File | Purpose |
|---|---|
| `index.html` | The entire app — UI, styles, and logic |
| `sw.js` | Service worker for offline caching |
| `manifest.json` | PWA manifest (install to home screen) |
| `icon.svg` | App icon |

## Deploy

Any static host works. On **Vercel**: import this repo as a new project and deploy — no build settings needed. Every push to `main` redeploys automatically.

To run locally, just serve the folder, e.g.:

```bash
npx serve .
```

## ⚠️ Data lives in the browser

All data is stored in localStorage on the device you use. Different devices don't sync, and clearing browser data erases everything. **Use the built-in Backup export (💾 icon) regularly.** For multi-device sync, the storage layer would need to be swapped for a cloud database (e.g. Supabase or Firebase).
