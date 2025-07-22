import { baseUrl } from 'app/sitemap'

export async function GET() {
  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Zvpply</title>
        <link>${baseUrl}</link>
        <description>Zvpply RSS feed</description>
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
