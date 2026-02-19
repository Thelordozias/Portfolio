/**
 * app/robots.ts
 *
 * Auto-generates /robots.txt at build time.
 * Update BASE_URL to your real domain before deploying.
 */

import { MetadataRoute } from "next";

const BASE_URL = "https://oziaskafando.vercel.app"; // ← update with your domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
