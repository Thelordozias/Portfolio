/**
 * app/sitemap.ts
 *
 * Auto-generates /sitemap.xml at build time.
 * Update BASE_URL to your real domain before deploying.
 */

import { MetadataRoute } from "next";
import { researchPapers } from "@/lib/data";

const BASE_URL = "https://oziaskafando.vercel.app"; // ← update with your domain

export default function sitemap(): MetadataRoute.Sitemap {
  const researchUrls: MetadataRoute.Sitemap = researchPapers.map((paper) => ({
    url: `${BASE_URL}/research/${paper.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/research`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...researchUrls,
  ];
}
