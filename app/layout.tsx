import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digtel — UAE Digital Marketing Agency",
  description:
    "Founded in 2023, Digtel is a UAE-born digital marketing agency crafting transformative digital experiences through design, technology, and marketing.",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
