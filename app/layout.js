import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollAnimator from "@/components/ScrollAnimator";

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
  title: {
    default: "Cafe | Fresh Coffee and Homemade Food",
    template: "%s | Cafe",
  },
  description:
    "A cozy cafe serving fresh roasted coffee, homemade pastries and meals. Visit us or reserve a table.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${dmSans.variable} font-body bg-cream text-ink`}>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <ScrollAnimator />
      </body>
    </html>
  );
}