import type { MetadataRoute } from "next";
import { intelligenceArticles } from "@/components/intelligence/intelligence-data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/solutions`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${SITE_URL}/solutions/mortgage-growth-operating-system`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${SITE_URL}/case-studies`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/intelligence`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const articles: MetadataRoute.Sitemap = intelligenceArticles.map((article) => ({
    url: `${SITE_URL}/intelligence/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...articles];
}
