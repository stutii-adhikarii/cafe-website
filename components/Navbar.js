"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import site from "@/data/site.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);       // mobile menu open?
  const [scrolled, setScrolled] = useState(false); // page scrolled down?
  const pathname = usePathname();

  // add a shadow once the page is scrolled
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // is this link the page we are on?
  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b border-ink bg-cream/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav
        aria-label="Main"
        className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between"
      >
        {/* text logo */}
        <Link
          href="/"
          className="font-heading text-4xl md:text-5xl text-primary uppercase tracking-wide transition-transform duration-300 hover:scale-105"
        >
          {site.name}
        </Link>

        {/* links for desktop */}
        <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-extrabold">
          {site.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`link-slide py-1 hover:text-accent ${
                  isActive(link.href) ? "is-active text-accent" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/reservation" className="btn hidden md:inline-block">
          Reserve
        </Link>

        {/* menu button for mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* mobile menu slides open */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-4 pb-5 flex flex-col gap-4 text-xs uppercase tracking-widest font-extrabold">
          {site.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={isActive(link.href) ? "text-accent" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/reservation" onClick={() => setOpen(false)} className="btn">
              Reserve
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
