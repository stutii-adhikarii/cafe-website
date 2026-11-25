import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import blog from "@/data/blog.json";
import site from "@/data/site.json";
import seo from "@/data/seo.json";
import BlogCard from "@/components/BlogCard";

// tells Next.js which post pages exist, so they are built in advance
export function generateStaticParams() {
  return blog.posts.map((post) => ({ slug: post.slug }));
}

// every post gets its own title and description for SEO
export async function generateMetadata({ params }) {
  // in this version of Next.js, params has to be awaited
  const { slug } = await params;
  const post = blog.posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: "/blog/" + post.slug },
    openGraph: {
      title: post.title + " | Cafe",
      description: post.excerpt,
      url: "/blog/" + post.slug,
      siteName: "Cafe",
      type: "article",
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title + " | Cafe",
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  // find the post that matches the address
  const post = blog.posts.find((p) => p.slug === slug);

  // no post with this address: show the 404 page
  if (!post) {
    notFound();
  }

  // the other posts, shown at the bottom
  const related = blog.posts.filter((p) => p.slug !== slug).slice(0, 2);

  // structured data (JSON-LD) that tells Google about this post
  const postData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: seo.siteUrl + post.image,
    datePublished: new Date(post.date).toISOString().split("T")[0],
    author: { "@type": "Organization", name: site.name },
    mainEntityOfPage: seo.siteUrl + "/blog/" + post.slug,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postData) }}
      />

      <section className="border-b border-ink">
        <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Link
            href="/blog"
            className="link-slide text-xs uppercase tracking-widest font-extrabold text-accent"
          >
            ← Back to Blog
          </Link>

          <header className="mt-6 mb-8 fade-in">
            <h1 className="font-heading text-5xl md:text-7xl uppercase mb-3">{post.title}</h1>
            <p className="text-sm text-accent uppercase tracking-widest">{post.date}</p>
          </header>

          <div className="relative h-64 md:h-96 mb-10 rounded-3xl overflow-hidden border border-ink">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          {post.content.map((paragraph, i) => (
            <p key={i} className="mb-5 text-lg leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
        </article>
      </section>

      {/* more posts */}
      <section className="bg-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-center mb-10">
            {blog.relatedTitle}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto stagger">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
