import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/api/"], // optional internal paths to exclude
      },
    ],
    sitemap: "https://www.wheelsynctech.com/sitemap.xml",
    host: "https://www.wheelsynctech.com",
  };
}
