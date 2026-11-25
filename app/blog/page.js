import Link from "next/link";
import blog from "@/data/blog.json";
import BlogCard from "@/components/BlogCard";

const title = "Blog";
const description =
  "Stories from our cafe: how we choose our beans, easy brewing tips and news about weekend events.";

export const metadata = {
  title: title,
  description: description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: title + " | Cafe",
    description: description,
    url: "/blog",
    siteName: "Cafe",
    type: "website",
    images: ["/images/hero.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: title + " | Cafe",
    description: description,
  },
};

export default function BlogPage() {
  return (
    <main>
      {/* page heading */}
      <section className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center fade-in">
          <h1 className="font-heading text-6xl md:text-8xl uppercase mb-4">
            {blog.title}
          </h1>
          <p className="max-w-2xl mx-auto text-ink">{blog.intro}</p>
        </div>
      </section>

      {/* post cards */}
      <section className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          {/* hidden heading keeps the heading order correct for screen readers */}
          <h2 className="sr-only">All posts</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 stagger">
            {blog.posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* call to action */}
      <section>
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-20 text-center">
          <h2 className="font-heading text-5xl md:text-6xl uppercase mb-4 text-accent">
            {blog.ctaTitle}
          </h2>
          <p className="text-ink mb-8">{blog.ctaText}</p>
          <Link href="/reservation" className="btn">
            Reserve a Table
          </Link>
        </div>
      </section>
    </main>
  );
}
