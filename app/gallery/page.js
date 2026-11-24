import Image from "next/image";
import Link from "next/link";
import gallery from "@/data/gallery.json";

export const metadata = {
  title: "Gallery",
  description:
    "Photos of our cafe: fresh coffee, homemade food, our cozy space and the people who make it special.",
};

export default function GalleryPage() {
  return (
    <main>
      {/* page heading */}
      <section className="border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <h1 className="font-heading text-6xl md:text-8xl uppercase mb-4">
            {gallery.title}
          </h1>
          <p className="max-w-2xl mx-auto text-ink">{gallery.intro}</p>
        </div>
      </section>

      {/* photo grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[240px]">
          {gallery.images.map((image) => (
            <div
              key={image.id}
              // the big photo takes 2 columns and 2 rows
              className={
                image.large ? "relative col-span-2 row-span-2" : "relative"
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* link to reservation */}
      <section className="bg-sand border-t border-dark text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
          <p className="mb-4">Like what you see? Come and visit us.</p>
          <Link href="/reservation" className="inline-block btn">
            Reserve a Table
          </Link>
        </div>
      </section>
    </main>
  );
}
