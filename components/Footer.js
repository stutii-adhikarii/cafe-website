import Link from "next/link";
import site from "@/data/site.json";

export default function Footer() {
  return (
    <footer className="border-t border-ink">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link href="/" className="font-heading text-4xl text-primary uppercase">
            {site.name}
          </Link>
          <p className="text-sm">{site.tagline}</p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest font-extrabold text-accent"
        >
          <Link href="/contact" className="link-slide py-1">Contact</Link>
          <Link href="/reservation" className="link-slide py-1">Reserve</Link>
          <span>{site.contact.address}</span>
        </nav>

        <Link href="/contact" className="btn-outline">
          Email Signup
        </Link>
      </div>

      <div className="border-t border-ink/20 px-4 py-4 text-center text-xs">
        {site.hours.map((item) => (
          <span key={item.days} className="mx-2">
            {item.days}: {item.time}
          </span>
        ))}
        <p className="mt-2">© 2026 {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
