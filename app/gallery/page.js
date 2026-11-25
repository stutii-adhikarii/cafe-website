import Link from "next/link";
import gallery from "@/data/gallery.json";
import GalleryGrid from "@/components/GalleryGrid";

const title = "Gallery";
const description =
  "Photos of our cafe: fresh coffee, homemade food, our cozy space and the people who make it special.";

export const metadata = {
  title: title,
  description: description,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: title + " | Cafe",
    description: description,
    url: "/gallery",
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

export default function GalleryPage() {
  return (
    <main>
      {/* page heading */}
      <section className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center fade-in">
          <h1 className="font-heading text-6xl md:text-8xl uppercase mb-4">
            {gallery.title}
          </h1>
          <p className="max-w-2xl mx-auto text-ink">{gallery.intro}</p>
        </div>
      </section>

      {/* photo grid */}
      <section className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <GalleryGrid />
        </div>
      </section>

      {/* link to reservation */}
      <section className="bg-sand">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 text-center">
          <p className="mb-4 text-ink">Like what you see? Come and visit us.</p>
          <Link href="/reservation" className="btn">
            Reserve a Table
          </Link>
        </div>
      </section>
    </main>
  );
}
