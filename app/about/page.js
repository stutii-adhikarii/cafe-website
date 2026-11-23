import Image from "next/image";
import Link from "next/link";
import about from "@/data/about.json";

export const metadata = {
  title: "About Us",
  description:
    "Learn the story of our cafe, what we believe in and the people behind your coffee.",
};

export default function AboutPage() {
  return (
    <main>
      {/* page heading */}
      <section className="border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <h1 className="font-heading text-6xl md:text-8xl uppercase mb-4">
            {about.title}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700">{about.intro}</p>
        </div>
      </section>

      {/* our story */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-primary uppercase tracking-widest text-sm mb-2">
            {about.story.label}
          </p>
          <h2 className="font-heading text-5xl md:text-6xl uppercase mb-6">
            {about.story.title}
          </h2>
          {about.story.paragraphs.map((text, index) => (
            <p key={index} className="text-gray-700 mb-4">
              {text}
            </p>
          ))}
        </div>

        <div className="relative h-80 md:h-[28rem]">
          <Image
            src={about.story.image}
            alt={about.story.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* values */}
      <section className="bg-sand border-y border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h2 className="font-heading text-5xl md:text-6xl uppercase text-center mb-12">
            {about.valuesTitle}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {about.values.map((value) => (
              <div key={value.title} className="bg-cream border border-dark/10 p-6">
                <h3 className="font-heading text-3xl uppercase text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <h2 className="font-heading text-5xl md:text-6xl uppercase text-center mb-12">
          {about.teamTitle}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {about.team.map((person) => (
            <div key={person.name}>
              <div className="relative h-80 mb-4">
                <Image
                  src={person.image}
                  alt={person.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-3xl uppercase">{person.name}</h3>
              <p className="text-primary uppercase tracking-widest text-sm">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* call to action */}
      <section className="bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h2 className="font-heading text-5xl md:text-6xl uppercase mb-4">
            {about.ctaTitle}
          </h2>
          <p className="mb-8">{about.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-dark px-6 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-white hover:text-dark"
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