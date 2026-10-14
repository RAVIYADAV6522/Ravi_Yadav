import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...siteConfig.resumes.map((r) => ({
      url: `${siteConfig.siteUrl}${r.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
