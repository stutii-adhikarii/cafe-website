import site from "@/data/site.json";
import ReservationForm from "@/components/ReservationForm";

export const metadata = {
  title: "Reserve a Table",
  description:
    "Book a table at our cafe. Choose your date, time and number of guests and we will confirm by phone.",
};

export default function ReservationPage() {
  const page = site.reservationPage;

  return (
    <main>
      {/* page heading */}
      <section className="border-b border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <h1 className="font-heading text-6xl md:text-8xl uppercase mb-4">
            {page.title}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700">{page.intro}</p>
        </div>
      </section>

      {/* form and side info */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-4xl md:text-5xl uppercase mb-6">
            {page.formTitle}
          </h2>
          <ReservationForm />
        </div>

        {/* side box */}
        <aside className="bg-sand border border-dark p-6 h-fit">
          <h2 className="font-heading text-3xl uppercase text-primary mb-4">
            {page.sideTitle}
          </h2>

          <ul className="space-y-3 text-gray-700 mb-6">
            {page.sideNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>

          <h3 className="text-primary uppercase tracking-widest text-sm mb-2">
            Opening Hours
          </h3>
          {site.hours.map((item) => (
            <p key={item.days} className="text-gray-700">
              {item.days}: {item.time}
            </p>
          ))}

          <p className="mt-6 text-gray-700">
            Questions? Call us on{" "}
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="text-primary font-semibold"
            >
              {site.contact.phone}
            </a>
          </p>
        </aside>
      </section>
    </main>
  );
}