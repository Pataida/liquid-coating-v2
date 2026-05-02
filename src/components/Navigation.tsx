"use client";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <>
      <MobileNav />
      {/* Desktop Navigation - Hidden on Mobile */}
      <nav className="hidden md:flex fixed top-10 left-0 w-full z-[100] px-10 pointer-events-none justify-between items-center">
        <Link href="/" className="pointer-events-auto">
          <img
            src="/icon.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="nav-pill pointer-events-auto bg-white/90 backdrop-blur-md border border-gray-100 flex gap-8 px-10 py-4 rounded-full shadow-sm"
        >
          {[
            "Services",
            "Lifecycle",
            "Products",
            "Projects",
            "About",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-widest hover:text-liquid-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </motion.div>
      </nav>
    </>
  );
}
