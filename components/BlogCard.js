"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
  // open = is the white preview layer showing?
  const [open, setOpen] = useState(false);

  // "November 10, 2026" is split into "November" and "10," for the date badge
  const [month, day] = post.date.split(" ");

  return (
    <article className="card group">
      {/* photo */}
      <div className="relative h-72 w-full overflow-hidden border-b-[1.5px] border-ink">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* date badge */}
        <div className="absolute left-0 top-0 bg-linear-to-b from-black/60 to-transparent pb-8 pl-5 pr-10 pt-4 text-white">
          <span className="block text-xs uppercase tracking-widest">
            {month.slice(0, 3)}
          </span>
          <span className="block font-heading text-4xl leading-none">
            {day.replace(",", "")}
          </span>
        </div>

        {/* white see-through layer, the Preview button shows and hides it */}
        <div
          className={`absolute inset-0 flex items-center bg-white/85 p-6 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-sm leading-relaxed text-ink">{post.excerpt}</p>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-heading text-3xl uppercase text-primary mb-1">{post.title}</h3>
        <p className="mb-4 text-sm text-ink/70">{post.date}</p>

        <div className="flex flex-wrap items-center gap-3">
          <Link href={`/blog/${post.slug}`} className="btn-outline">
            Read More
          </Link>

          {/* small round button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="rounded-full border border-accent bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-accent transition-colors duration-200 hover:bg-accent hover:text-white"
          >
            {open ? "Close" : "Preview"}
          </button>
        </div>
      </div>
    </article>
  );
}
