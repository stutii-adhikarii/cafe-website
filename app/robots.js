import seo from "@/data/seo.json";

// Next.js turns this into /robots.txt
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: seo.siteUrl + "/sitemap.xml",
  };
}
