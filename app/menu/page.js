import Link from "next/link";
import menu from "@/data/menu.json";
import MenuList from "@/components/MenuList";

export const metadata = {
  title: "Menu",
  description:
    "Browse our menu of fresh coffee, tea, homemade food and desserts. Prices in Nepalese rupees.",
};

export default function MenuPage() {
  return (
    <main>
      {/* page heading */}
      <section className="border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <h1 className="font-heading text-6xl md:text-8xl uppercase mb-4">
            {menu.title}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700">{menu.intro}</p>
        </div>
      </section>

      {/* filter and cards */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <MenuList />
      </section>

      {/* link to reservation */}
      <section className="bg-sand border-t border-dark text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
          <p className="mb-4">Coming with a group? Reserve a table before you visit.</p>
          <Link
            href="/reservation"
            className="inline-block bg-primary text-white px-6 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-dark"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </main>
  );
}