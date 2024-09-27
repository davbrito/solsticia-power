import type { APIContext } from "astro";

export function GET({ site }: APIContext) {
  const sitemapUrl = new URL("/sitemap-index.xml", site).href;
  const content = [
    "User-agent: *",
    "Allow: /",
    "Sitemap: " + sitemapUrl,
    "",
  ].join("\n");
  return new Response(content);
}
