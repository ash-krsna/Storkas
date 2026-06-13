# Storkas

Storkas is a modern logistics platform for pickup coordination, local delivery, B2B freight, warehousing, partner onboarding, and business route planning.

The MVP is built as a Vite + React + Tailwind CSS website with static data and visual request forms. It is ready to deploy on Vercel.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production output is generated in:

```text
dist
```

## Vercel Settings

Use these settings when importing the GitHub repo into Vercel:

```text
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist
Root Directory: leave empty
Node.js Version: 20.x or 22.x
```

The project includes `vercel.json` with an SPA rewrite to `index.html`.
