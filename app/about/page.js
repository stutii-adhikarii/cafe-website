import Image from "next/image";
import Link from "next/link";
import about from "@/data/about.json";

const title = "About Us";
const description =
  "Learn the story of our cafe, what we believe in and the people behind your coffee.";

export const metadata = {
  title: title,
  description: description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: title + " | Cafe",
    description: description,
    url: "/about",
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

export default function AboutPage() {
  return (
    <main>
      {/* page heading */}
      <section className="bg-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center fade-in">
          <h1 className="font-heading text-6xl md:text-8xl uppercase mb-4">
            {about.title}
          </h1>
          <p className="max-w-2xl mx-auto text-ink">{about.intro}</p>
        </div>
      </section>

      {/* our story */}
      <section>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-accent uppercase tracking-widest text-sm mb-2">
              {about.story.label}
            </p>
            <h2 className="font-heading text-5xl md:text-6xl uppercase mb-6 text-accent">
              {about.story.title}
            </h2>
            {about.story.paragraphs.map((text, index) => (
              <p key={index} className="text-ink mb-4">
                {text}
              </p>
            ))}
          </div>

          <div className="relative h-80 md:h-[28rem] rounded-3xl overflow-hidden">
            <Image
              src={about.story.image}
              alt={about.story.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* values */}
      <section className="bg-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h2 className="font-heading text-5xl md:text-6xl uppercase text-center mb-12">
            {about.valuesTitle}
          </h2>

          <div className="grid gap-6 md:grid-cols-3 stagger">
            {about.values.map((value) => (
              <div key={value.title} className="card p-6">
                <h3 className="font-heading text-3xl uppercase text-accent mb-3">
                  {value.title}
                </h3>
                <p className="text-ink">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h2 className="font-heading text-5xl md:text-6xl uppercase text-center mb-12">
            {about.teamTitle}
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 stagger">
            {about.team.map((person) => (
              <div key={person.name} className="card">
                <div className="relative h-80">
                  <Image
                    src={person.image}
                    alt={person.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-3xl uppercase text-primary">
                    {person.name}
                  </h3>
                  <p className="text-accent uppercase tracking-widest text-sm">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* call to action */}
      <section className="bg-sand">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-20 text-center">
          <h2 className="font-heading text-5xl md:text-6xl uppercase mb-4 text-accent">
            {about.ctaTitle}
          </h2>
          <p className="text-ink mb-8">{about.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn">
              View Menu
            </Link>
            <Link href="/reservation" className="btn-outline">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
