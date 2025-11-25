export async function GET() {
  const body = `User-agent: *
Allow: /
# Block legacy WordPress taxonomies and feeds to reduce crawl on redirecting pages
Disallow: /category/
Disallow: /tag/
Disallow: /author/
Disallow: /blogs-dr-osama-albokl/
Disallow: /portfolio-category/
Disallow: /*/feed
Disallow: /feed
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
