import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load Inter font with variable font support
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Poet Malik - Poet, Musician, Author",
  description:
    "Official portfolio of The Poet Malik, a Fort Worth-based artist blending poetry, music, and storytelling.",
  keywords: "poetry, musician, author, Fort Worth, Texas, spoken word, artist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-off-black text-soft-white font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
