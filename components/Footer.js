import site from "@/data/site.json";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid gap-10 md:grid-cols-3">
        {/* about */}
        <div>
          <h2 className="font-heading text-4xl text-primary uppercase mb-4">{site.name}</h2>
          <p className="text-gray-300">{site.tagline}</p>
        </div>

        {/* opening hours */}
        <div>
          <h3 className="text-primary uppercase tracking-widest text-sm mb-4">Opening Hours</h3>
          {site.hours.map((item) => (
            <p key={item.days} className="text-gray-300 mb-2">
              {item.days}: {item.time}
            </p>
          ))}
        </div>

        {/* contact */}
        <div>
          <h3 className="text-primary uppercase tracking-widest text-sm mb-4">Contact</h3>
          <p className="text-gray-300 mb-2">{site.contact.address}</p>
          <p className="text-gray-300 mb-2">{site.contact.phone}</p>
          <p className="text-gray-300">{site.contact.email}</p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
