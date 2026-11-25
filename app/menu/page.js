import Link from "next/link";
import menu from "@/data/menu.json";
import MenuList from "@/components/MenuList";

const title = "Menu";
const description =
  "Browse our menu of fresh coffee, tea, homemade food and desserts. Prices are in Nepalese rupees.";

export const metadata = {
  title: title,
  description: description,
  alternates: { canonical: "/menu" },
  openGraph: {
    title: title + " | Cafe",
    description: description,
    url: "/menu",
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

export default function MenuPage() {
  return (
    <main>
      {/* page heading */}
      <section className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center fade-in">
          <h1 className="font-heading text-6xl md:text-8xl uppercase mb-4">
            {menu.title}
          </h1>
          <p className="max-w-2xl mx-auto text-ink">{menu.intro}</p>
        </div>
      </section>

      {/* filter and cards */}
      <section className="border-b border-ink">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          {/* hidden heading keeps the heading order correct for screen readers */}
          <h2 className="sr-only">Menu items</h2>
          <MenuList />
        </div>
      </section>

      {/* link to reservation */}
      <section className="bg-sand">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 text-center">
          <p className="mb-4 text-ink">Coming with a group? Reserve a table before you visit.</p>
          <Link href="/reservation" className="btn">
            Reserve a Table
          </Link>
        </div>
      </section>
    </main>
  );
}
