"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import SuccessModal from "@/components/SuccessModal";

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a production app, you'd handle the API call here.
    // For now, we trigger the "Standard-Setter" UI immediately.
    setShowSuccess(true);
  };

  return (
    <main className="pt-40 pb-20 px-10 max-w-5xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl font-black text-liquid-text tracking-tighter">
            Let's Protect <br /> Your Asset.
          </h1>
          <p className="mt-6 text-gray-500 font-medium">
            Harare Office: Msasa Industrial Park
          </p>
          <p className="text-liquid-primary font-bold">
            specifications@liquidcoating.co.zw
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            required
            placeholder="Project Name"
            className="w-full p-4 bg-liquid-soft rounded-2xl outline-none focus:ring-2 ring-liquid-primary transition-all text-liquid-text"
          />
          <select
            required
            className="w-full p-4 bg-liquid-soft rounded-2xl outline-none focus:ring-2 ring-liquid-primary transition-all text-liquid-text"
          >
            <option value="">Select System Requirement</option>
            <option value="waterproofing">Waterproofing</option>
            <option value="flooring">Flooring</option>
            <option value="concrete">Concrete Repair</option>
          </select>
          <textarea
            required
            placeholder="Technical Requirements"
            rows={4}
            className="w-full p-4 bg-liquid-soft rounded-2xl outline-none focus:ring-2 ring-liquid-primary transition-all text-liquid-text"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-4 bg-liquid-text text-white rounded-2xl font-bold hover:bg-liquid-primary transition-all shadow-lg hover:shadow-liquid-primary/20"
          >
            Request Spec <Send size={16} />
          </button>
        </form>
      </div>

      {/* The high-end success feedback */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </main>
  );
}
