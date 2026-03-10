import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation"; // Your global Nav component
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. BRAND POSITIONING METADATA
export const metadata: Metadata = {
  title: "Liquid Coating | Building Protection & Performance Systems",
  description:
    "Living a Beautiful Mark. Specializing in Waterproofing, Flooring, and Lifecycle Infrastructure Management.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-liquid-text`}
      >
        {/* 2. GLOBAL ELEMENTS */}
        {/* This stays visible on Home, Systems, Shop, etc. */}
        <Navigation />

        {/* 3. PAGE CONTENT */}
        {/* This is where your individual pages swap in/out */}
        <main>{children}</main>

        {/* FAB */}
        <FloatingContact />

        {/* 4. GLOBAL FOOTER (To be added next) */}
        <Footer />
      </body>
    </html>
  );
}
