import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lostContact = localFont({
  src: "../public/font/AOTLostContact.woff2",
  variable: "--font-lost-contact",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digtel Agency | Digital Product & Marketing Studio Dubai",
  description:
    "A UAE-born digital creative agency helping startups and enterprises scale through high-fidelity design and engineering.",
  keywords: "digital marketing, UAE, web development, SEO, video production, Dubai",
  openGraph: {
    title: "Digtel — Building What's Next",
    description:
      "Make your brand so useful, people would miss it if it disappeared.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lostContact.variable} scroll-smooth`}>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
