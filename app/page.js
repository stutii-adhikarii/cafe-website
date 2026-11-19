import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";

export const metadata = {
  title: "Fresh Coffee and Homemade Food in Kathmandu",
  description: "Visit our cafe for fresh roasted coffee, homemade pastries and a warm place to relax.",
};

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center text-center text-white">
        <Image
          src={site.hero.image}
          alt={site.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* dark layer so the text is readable */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative px-4">
          <p className="text-primary uppercase tracking-widest mb-4">{site.hero.label}</p>
          <h1 className="font-heading text-6xl md:text-8xl uppercase mb-6">{site.hero.title}</h1>
          <p className="max-w-xl mx-auto mb-8">{site.hero.text}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-primary px-6 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-white hover:text-dark"
            >
              View Menu
            </Link>
            <Link
              href="/reservation"
              className="border border-white px-6 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-white hover:text-dark"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}