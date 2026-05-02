"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Instagram, Facebook, X } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when contact modal is open to match MobileNav behavior
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <MessageCircle size={24} />,
      href: "https://wa.me/263772422035",
      color: "text-[#25D366]",
    },
    {
      name: "Direct Call",
      icon: <Phone size={24} />,
      href: "tel:+263772422035",
      color: "text-liquid-primary",
    },
    {
      name: "Facebook",
      icon: <Facebook size={24} />,
      href: "https://www.facebook.com/profile.php?id=61575353097750",
      color: "text-[#1877F2]",
    },
  ];

  return (
    <>
      {/* The Main Trigger Button (Always visible bottom right) */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 bg-white shadow-2xl rounded-full flex items-center justify-center overflow-hidden border-none group"
        >
          <img
            src="/icon.png"
            alt="Contact"
            className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-500"
          />
        </motion.button>
      </div>

      {/* Full Screen Immersive Contact Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // EXACT MATCH to MobileNav: white/60 + backdrop-blur-md
            className="fixed inset-0 z-[200] bg-white/60 backdrop-blur-md flex flex-col items-center justify-center p-12"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-4 text-liquid-text"
            >
              <X size={32} strokeWidth={1} />
            </button>

            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-12"
            >
              Connect With Us
            </motion.span>

            {/* Floating Social Links */}
            <nav className="flex flex-col items-center space-y-10">
              {socialLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-6 group"
                  >
                    <span
                      className={`${link.color} transition-transform group-hover:scale-125 duration-300`}
                    >
                      {link.icon}
                    </span>
                    <span className="text-2xl font-light text-liquid-text uppercase tracking-[0.3em] group-hover:text-liquid-primary transition-colors">
                      {link.name}
                    </span>
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Footer Branding */}
            <div className="absolute bottom-12 text-center">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.8em] opacity-40">
                Living a Beautiful Mark.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
