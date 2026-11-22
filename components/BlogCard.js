import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article>
      <div className="relative h-60 mb-4">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <p className="text-sm text-gray-500 mb-1">{post.date}</p>
      <h3 className="font-heading text-3xl uppercase mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>

      <Link
        href={`/blog/${post.slug}`}
        className="inline-block border border-primary text-primary px-4 py-2 text-sm uppercase tracking-wider font-semibold hover:bg-primary hover:text-white"
      >
        Read More
      </Link>
    </article>
  );
}