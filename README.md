# Zvpply

Personal portfolio and professional site for Zach McNair.

## Features

- Modern, clean design with Faktum font family
- Last.fm scrobbler integration
- Responsive layout
- Dark mode support
- Optimized for SEO

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Faktum font family
- Vercel Analytics

## Environment Setup

To run this project locally, you'll need to set up environment variables:

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Get a Last.fm API key:
   - Visit [Last.fm API](https://www.last.fm/api/account/create)
   - Create an account and generate an API key
   - Add your API key to `.env.local`:
     ```
     LASTFM_API_KEY=your_actual_api_key_here
     ```

3. Update the username in `app/api/lastfm/route.ts` to match your Last.fm username

## Development

### Single Environment
```bash
# Run main (full site) on port 7007
npm run dev:main

# Run staging (minimal site) on port 7008
npm run dev:staging

# Run current branch on port 7007
npm run dev
```

### Both Environments Simultaneously
```bash
# Run both main and staging environments
npm run dev:both
```

This will start:
- **Main (Full Site)**: http://localhost:7007
- **Staging (Minimal)**: http://localhost:7008

## Deployment

Deployed on Vercel at [zvpply.com](https://zvpply.com)
