import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";
import menu from "@/data/menu.json";
import blog from "@/data/blog.json";
import MenuCard from "@/components/MenuCard";
import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: "Fresh Coffee and Homemade Food in Kathmandu",
  description:
    "Visit our cafe for fresh roasted coffee, homemade pastries and a warm place to relax.",
};

export default function Home() {
  // only the items marked "featured" in menu.json
  const featuredItems = menu.items.filter((item) => item.featured);
  // the first 3 blog posts
  const latestPosts = blog.posts.slice(0, 3);

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

      {/* featured menu */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-widest text-sm mb-2">
            {site.home.featuredLabel}
          </p>
          <h2 className="font-heading text-5xl md:text-6xl uppercase">
            {site.home.featuredTitle}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-block border border-dark px-6 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-dark hover:text-white"
          >
            See Full Menu
          </Link>
        </div>
      </section>

      {/* about teaser */}
      <section className="bg-sand border-y border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative h-80 md:h-96">
            <Image
              src={site.about.image}
              alt={site.about.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-primary uppercase tracking-widest text-sm mb-2">
              {site.about.label}
            </p>
            <h2 className="font-heading text-5xl md:text-6xl uppercase mb-4">
              {site.about.title}
            </h2>
            <p className="text-gray-700 mb-6">{site.about.text}</p>
            <Link
              href="/about"
              className="inline-block bg-primary text-white px-6 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-dark"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* blog preview */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-widest text-sm mb-2">
            {site.home.blogLabel}
          </p>
          <h2 className="font-heading text-5xl md:text-6xl uppercase">
            {site.home.blogTitle}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* call to action */}
      <section className="bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h2 className="font-heading text-5xl md:text-6xl uppercase mb-4">
            {site.home.ctaTitle}
          </h2>
          <p className="mb-8">{site.home.ctaText}</p>
          <Link
            href="/reservation"
            className="inline-block bg-dark px-6 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-white hover:text-dark"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </main>
  );
}