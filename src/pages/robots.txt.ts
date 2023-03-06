import type { APIContext } from "astro";

export function get({ site }: APIContext) {
  const sitemapUrl = new URL("/sitemap-index.xml", site).href;
  const content = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`;
  return new Response(content);
}
