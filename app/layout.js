import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import site from "@/data/site.json";
import seo from "@/data/seo.json";

// load the fonts
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  variable: "--font-dm",
});

export const metadata = {
  // needed so image links like /images/hero.jpeg become full web addresses
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: site.name + " | Fresh Coffee and Homemade Food",
    template: "%s | " + site.name,
  },
  description:
    "A cozy cafe serving fresh roasted coffee, homemade pastries and meals. Visit us or reserve a table.",
};

// structured data (JSON-LD) that tells Google about our cafe
const cafeData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  description: site.tagline,
  url: seo.siteUrl,
  image: seo.siteUrl + site.hero.image,
  telephone: site.contact.phone,
  email: site.contact.email,
  priceRange: seo.priceRange,
  servesCuisine: seo.servesCuisine,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address,
    addressLocality: seo.city,
    addressCountry: seo.country,
  },
  openingHours: seo.openingHours,
  hasMenu: seo.siteUrl + "/menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${dmSans.variable} font-body bg-cream text-ink`}>
        {/* the JSON-LD data is put in the page as a script tag */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeData) }}
        />

        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
