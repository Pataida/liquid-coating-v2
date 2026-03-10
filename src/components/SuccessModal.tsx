"use client";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

export default function SuccessModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-liquid-text/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[40px] p-12 max-w-sm w-full text-center shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-liquid-text"
            >
              <X size={20} />
            </button>

            <div className="flex justify-center mb-6">
              <div className="bg-green-50 p-4 rounded-full">
                <CheckCircle2 size={48} className="text-green-500" />
              </div>
            </div>

            <h3 className="text-2xl font-black text-liquid-text tracking-tighter mb-2">
              Request Received.
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              A Liquid Coating specialist will review your technical
              requirements and contact you within 24 hours.
            </p>

            <button
              onClick={onClose}
              className="w-full py-4 bg-liquid-primary text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-liquid-dark transition-colors"
            >
              Back to Site
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
