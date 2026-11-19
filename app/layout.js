import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// load the fonts
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${bebas.variable} ${inter.variable} font-body bg-cream text-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}