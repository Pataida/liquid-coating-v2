"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Lifecycle", href: "/lifecycle" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Static Header (The reference for our "Frosted Glass" look) */}
      <div className="md:hidden flex items-center justify-between w-full px-8 py-6 fixed top-0 left-0 z-[100] bg-white/60 backdrop-blur-md border-b border-gray-100/20">
        <Link href="/">
          <img
            src="/icon.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-liquid-text"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Immersive Modal Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Exact background match: white/60 + backdrop-blur-md
            className="fixed inset-0 z-[200] bg-white/60 backdrop-blur-md flex flex-col items-center justify-center p-12"
          >
            {/* Close Button - Thinner stroke for "Standard-Setter" look */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-4 text-liquid-text"
            >
              <X size={32} strokeWidth={1} />
            </button>

            {/* Spaced Out Nav Links */}
            <nav className="flex flex-col items-center space-y-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-light text-liquid-text uppercase tracking-[0.4em] hover:text-liquid-primary transition-all active:scale-95 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Minimal Footer */}
            <div className="absolute bottom-12 text-center">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.8em] opacity-40">
                Liquid Coating (Pvt) Ltd.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
