import site from "@/data/site.json";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our cafe. Find our address, phone number and opening hours, or send us a message.",
};

export default function ContactPage() {
  const page = site.contactPage;

  // turns the address into a link for the map
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.contact.address,
  )}&output=embed`;

  return (
    <main>
      {/* page heading */}
      <section className="border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <h1 className="font-heading text-6xl md:text-8xl uppercase mb-4">
            {page.title}
          </h1>
          <p className="max-w-2xl mx-auto text-ink">{page.intro}</p>
        </div>
      </section>

      {/* info and form */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 grid gap-12 md:grid-cols-2">
        {/* left side: contact info */}
        <div>
          <h2 className="font-heading text-4xl md:text-5xl uppercase mb-6">
            {page.infoTitle}
          </h2>

          <div className="mb-6">
            <h3 className="text-accent uppercase tracking-widest text-sm mb-1">
              Address
            </h3>
            <p className="text-ink">{site.contact.address}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-accent uppercase tracking-widest text-sm mb-1">
              Phone
            </h3>
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="text-ink hover:text-primary"
            >
              {site.contact.phone}
            </a>
          </div>

          <div className="mb-6">
            <h3 className="text-accent uppercase tracking-widest text-sm mb-1">
              Email
            </h3>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-ink hover:text-primary"
            >
              {site.contact.email}
            </a>
          </div>

          <div>
            <h3 className="text-accent uppercase tracking-widest text-sm mb-1">
              Opening Hours
            </h3>
            {site.hours.map((item) => (
              <p key={item.days} className="text-ink">
                {item.days}: {item.time}
              </p>
            ))}
          </div>
        </div>

        {/* right side: form */}
        <div>
          <h2 className="font-heading text-4xl md:text-5xl uppercase mb-6">
            {page.formTitle}
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* map */}
      <section className="bg-sand border-t border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-center mb-8">
            {page.mapTitle}
          </h2>
          <iframe
            src={mapSrc}
            title="Map showing the location of our cafe"
            loading="lazy"
            className="w-full h-80 md:h-96 border border-dark"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
