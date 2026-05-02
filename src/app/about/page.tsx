"use client";

import { motion } from "framer-motion";
import { Users, Target, Rocket, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative pt-40 pb-32 min-h-screen bg-white overflow-hidden">
      {/* Logo Watermark Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: "url('/icon.png')",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-10">
        <header className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-liquid-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            Since Establishment
          </motion.p>
          <h1 className="text-6xl md:text-8xl font-black text-liquid-text tracking-tighter leading-none">
            Engineered for <br /> Longevity.
          </h1>
        </header>

        {/* Section 1: Who We Are */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-liquid-soft rounded-2xl text-liquid-primary">
              <Users size={24} />
            </div>
            <h2 className="text-3xl font-black text-liquid-text tracking-tight">
              Who We Are
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-4xl">
            Liquid Coating (Pvt) Ltd is a Zimbabwean company specialising in
            coating systems. We are committed to delivering high-quality
            products and services that meet the needs of both residential and
            commercial clients.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Section 2: Vision */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-liquid-primary rounded-[50px] text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-2xl text-white">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-black tracking-tight">Vision</h2>
            </div>
            <p className="text-lg leading-relaxed opacity-90 font-medium">
              To deliver high-quality coating solutions that protect, enhance,
              and leave a lasting impact on every structure we work on.
            </p>
          </motion.section>

          {/* Section 3: Our Strength */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-liquid-soft rounded-[50px] border border-liquid-primary/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl text-liquid-primary shadow-sm">
                <Award size={24} />
              </div>
              <h2 className="text-2xl font-black text-liquid-text tracking-tight">
                Our Strength
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-600 font-medium">
              We have skilled personnel, modern equipment, and a strong
              commitment to excellence in every project we undertake.
            </p>
          </motion.section>
        </div>

        {/* Brand Philosophy / Closing */}
        <div className="mt-32 pt-20 border-t border-gray-100 flex flex-col items-center text-center">
          <Rocket className="text-liquid-primary mb-8" size={40} />
          <p className="text-3xl md:text-5xl font-black text-liquid-text tracking-tighter max-w-3xl">
            Partnering in the protection of Zimbabwean infrastructure.
          </p>
          <div className="mt-12 px-8 py-3 bg-liquid-soft rounded-full text-liquid-primary font-black uppercase text-[10px] tracking-[0.5em]">
            Living a Beautiful Mark
          </div>
        </div>
      </div>
    </main>
  );
}
