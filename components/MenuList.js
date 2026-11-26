"use client";

import { useState } from "react";
import menu from "@/data/menu.json";
import MenuCard from "@/components/MenuCard";

export default function MenuList() {
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...menu.categories];

  // filter by category and by what was typed in the search box
  const shownItems = menu.items.filter((item) => {
    const matchesCategory = selected === "All" || item.category === selected;
    const words = `${item.name} ${item.category}`.toLowerCase().split(" ");
    const searchWords = search.trim().toLowerCase().split(" ");
    const matchesSearch = searchWords.every((searchWord) =>
      words.some((word) => word.startsWith(searchWord))
    );
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* category buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            aria-pressed={selected === category}
            className={selected === category ? "btn" : "btn-outline"}
          >
            {category}
          </button>
        ))}
      </div>

      {/* search box */}
      <div className="max-w-md mx-auto mb-12">
        <label htmlFor="menu-search" className="sr-only">
          Search the menu
        </label>
        <input
          id="menu-search"
          type="search"
          placeholder="Search the menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full border border-ink/30 bg-white px-5 py-3"
        />
      </div>

      {/* menu cards: key makes them animate again when the category changes */}
      {shownItems.length === 0 ? (
        <p className="text-center">Nothing found. Try another word or category.</p>
      ) : (
        <div key={selected} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shownItems.map((item, index) => (
            <div
              key={item.id}
              className="fade-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
