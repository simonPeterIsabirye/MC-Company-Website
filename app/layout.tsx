import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // Optional: use as a CSS variable
});

export const metadata: Metadata = {
  title: "MindCreative Labs",
  description: "Building Africa’s Intelligent Digital Future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} antialiased`}>{children}</body>
    </html>
  );
}
