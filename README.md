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

## Backend API

The MVP includes Vercel serverless API functions:

```text
GET  /api/health
POST /api/shipment-request
POST /api/partner-application
POST /api/business-quote
POST /api/contact
```

Run backend smoke tests locally with:

```bash
npm run test:api
```

Current backend behavior:

- Validates required fields
- Sanitizes string input
- Returns a reference ID for each successful submission
- Logs submissions to the serverless function log

Next backend upgrades:

- Persist submissions in a database
- Send email or WhatsApp notifications
- Add admin dashboard access
- Add shipment tracking records
