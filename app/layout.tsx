import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Apanka Ayebadek David | Data, Development & AgricTech",
  description:
    "I connect agriculture, data, and technology to build practical digital solutions — proven through real, working systems.",
  openGraph: {
    title: "Apanka Ayebadek David",
    description: "Data, Development, Marketing & AgricTech — connected by real, working projects.",
    url: "https://apanka-portfolio.vercel.app",
    siteName: "Apanka Ayebadek David",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apanka Ayebadek David",
    description: "Data, Development, Marketing & AgricTech — connected by real, working projects.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-manrope bg-[#F7F5EF] text-[#0A1210]">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
