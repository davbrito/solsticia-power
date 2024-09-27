import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import process from "node:process";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:3000`,
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
