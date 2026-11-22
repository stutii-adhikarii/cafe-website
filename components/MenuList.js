"use client";

import { useState } from "react";
import menu from "@/data/menu.json";
import MenuCard from "@/components/MenuCard";

export default function MenuList() {
  // selected = the category button that is active
  const [selected, setSelected] = useState("All");

  const categories = ["All", ...menu.categories];

  // show everything, or only items of the selected category
  const shownItems =
    selected === "All"
      ? menu.items
      : menu.items.filter((item) => item.category === selected);

  return (
    <div>
      {/* category buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            aria-pressed={selected === category}
            className={
              selected === category
                ? "bg-primary text-white px-5 py-2 text-sm uppercase tracking-wider font-semibold"
                : "border border-dark px-5 py-2 text-sm uppercase tracking-wider font-semibold hover:bg-dark hover:text-white"
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* menu cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {shownItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}