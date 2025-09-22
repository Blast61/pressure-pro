import type { MetadataRoute } from "next";
import { db } from "@/lib/server/db";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const items = db.list().map((conf) => ({
    url: `${base}/conference/${conf.id}`,
    lastModified: new Date(conf.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...items,
  ];
}
