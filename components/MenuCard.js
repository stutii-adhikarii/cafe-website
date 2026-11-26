"use client";

import { useState } from "react";
import Image from "next/image";

export default function MenuCard({ item }) {
  // open = is the white details layer showing?
  const [open, setOpen] = useState(false);

  return (
    <article className="card group">
      {/* photo */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* price badge */}
        <div className="absolute left-0 top-0 bg-linear-to-b from-black/60 to-transparent pb-8 pl-5 pr-10 pt-4 text-white">
          <span className="block text-xs uppercase tracking-widest">Rs.</span>
          <span className="block font-heading text-4xl leading-none">{item.price}</span>
        </div>

        {/* white see-through layer, it fades in slowly */}
        <div
          className={`absolute inset-0 flex flex-col justify-center bg-white/85 p-6 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* the text slides up a little while the layer fades in */}
          <div
            className={`transition-all duration-500 ease-out ${
              open ? "translate-y-0 opacity-100 delay-100" : "translate-y-4 opacity-0"
            }`}
          >
            <p className="font-heading text-3xl uppercase text-accent mb-2">
              {item.name}
            </p>
            <p className="text-sm leading-relaxed text-ink">{item.description}</p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-heading text-3xl uppercase text-primary">{item.name}</h3>
        <p className="mb-4 text-sm text-ink/70">{item.category}</p>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-33 rounded-full border border-accent bg-white px-4 py-1.5 text-center text-xs font-extrabold uppercase tracking-wider text-accent hover:bg-accent hover:text-white"
        >
          {open ? "Close" : "View Details"}
        </button>
      </div>
    </article>
  );
}
