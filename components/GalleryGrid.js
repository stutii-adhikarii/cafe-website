"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gallery from "@/data/gallery.json";

export default function GalleryGrid() {
  const images = gallery.images;

  // current = number of the photo that is open, null means none is open
  const [current, setCurrent] = useState(null);

  function showNext() {
    setCurrent((current + 1) % images.length);
  }

  function showPrevious() {
    setCurrent((current - 1 + images.length) % images.length);
  }

  // keyboard: arrow keys change the photo, Escape closes it
  useEffect(() => {
    if (current === null) return;

    function handleKey(e) {
      if (e.key === "Escape") setCurrent(null);
      if (e.key === "ArrowRight") setCurrent((current + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((current - 1 + images.length) % images.length);
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[240px]">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Open photo: ${image.alt}`}
            className={`group relative overflow-hidden border border-ink ${
              image.large ? "col-span-2 row-span-2" : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* big photo viewer, only shown when a photo is open */}
      {current !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 fade-in"
          onClick={() => setCurrent(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setCurrent(null)}
            className="absolute right-4 top-4 text-4xl text-white hover:text-primary"
          >
            ✕
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 md:left-8 text-5xl text-white hover:text-primary"
          >
            ‹
          </button>

          <div
            className="relative h-[80vh] w-[80vw] md:w-[85vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 md:right-8 text-5xl text-white hover:text-primary"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
