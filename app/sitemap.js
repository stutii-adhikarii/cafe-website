import blog from "@/data/blog.json";
import seo from "@/data/seo.json";

// Next.js turns this into /sitemap.xml
export default function sitemap() {
  // the main pages
  const paths = ["", "/about", "/menu", "/gallery", "/blog", "/reservation", "/contact"];

  const pages = paths.map((path) => ({
    url: seo.siteUrl + path,
    lastModified: new Date(),
  }));

  // one page for each blog post
  const posts = blog.posts.map((post) => ({
    url: seo.siteUrl + "/blog/" + post.slug,
    lastModified: new Date(post.date),
  }));

  return [...pages, ...posts];
}
