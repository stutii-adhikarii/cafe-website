"use client";

import Link from "next/link";
import { useState } from "react";
import site from "@/data/site.json";

export default function Navbar() {
  // open = is the mobile menu showing?
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream border-b border-dark">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* text logo */}
        <Link href="/" className="font-heading text-4xl text-primary uppercase">
          {site.name}
        </Link>

        {/* links for desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-semibold">
          {site.navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/reservation"
          className="hidden md:block bg-primary text-white px-5 py-2 text-sm uppercase tracking-wider font-semibold hover:bg-dark"
        >
          Reserve
        </Link>

        {/* menu button for mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm uppercase tracking-wider font-semibold">
          {site.navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/reservation" onClick={() => setOpen(false)} className="text-primary">
              Reserve
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}