"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  HardHat,
  Warehouse,
  Droplets,
  Camera,
  ClipboardCheck,
  Mail,
  BarChart3,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const systems = [
  {
    name: "Waterproofing Systems",
    icon: <Droplets />,
    desc: "Complete Building Envelope Protection.",
  },
  {
    name: "Floor Protection",
    icon: <Warehouse />,
    desc: "Mechanical & Chemical Performance Systems.",
  },
  {
    name: "Concrete Enhancement",
    icon: <Shield />,
    desc: "Structural Integrity & Asset Longevity.",
  },
  {
    name: "Mechanical Systems",
    icon: <HardHat />,
    desc: "Industrial Performance Specifications.",
  },
];

const technicalSolutions = [
  {
    id: "01",
    title: "Epoxy Flooring",
    desc: "Industrial-strength durability with a mirror finish for warehouses and residential spaces.",
    sublinks: ["Commercial Solutions", "Industrial Coatings", "Custom Designs"],
  },
  {
    id: "02",
    title: "Waterproofing",
    desc: "High-performance torch-on membranes to protect roofs and foundations from water damage.",
    sublinks: [
      "Torch-on Membranes",
      "Gutter Protection",
      "Rising Damp Treatment",
    ],
  },
  {
    id: "03",
    title: "Construction Chemicals",
    desc: "Precision admixtures and sealants designed to increase the structural lifespan of buildings.",
    sublinks: ["Concrete Admixtures", "Sealants & GRG", "Thermal Insulation"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section: Full-Width Background with Fade */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-white">
        {/* The Background Image Container */}
        <div className="absolute top-0 right-0 w-full h-full lg:w-3/4">
          {/* The Linear Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent lg:from-white lg:via-white/40 lg:to-transparent" />

          <img
            src="/epoxy-mirror-finish.webp"
            alt="Epoxy Mirror Finish"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* The Content Layer */}
        <div className="relative z-20 max-w-7xl mx-auto px-10 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-liquid-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
                Building Protection & Performance Systems
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-liquid-text tracking-tighter leading-[0.85] mb-8">
                Living a <br /> Beautiful Mark.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                We don't just fix leaks; we protect infrastructure for the
                long-term through engineered performance systems.
              </p>

              <div className="flex gap-6">
                <Link href="/contact">
                  <button className="px-10 py-4 bg-liquid-text text-white rounded-full font-bold text-sm hover:bg-liquid-primary transition-all shadow-lg hover:shadow-liquid-primary/20">
                    Get a Specification
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="px-10 py-4 border border-gray-200 text-liquid-text rounded-full font-bold text-sm hover:bg-gray-50 transition-all">
                    View Projects
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Systems Grid */}
      <section className="px-10 py-20 bg-liquid-soft">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((sys, idx) => (
            <motion.div
              key={sys.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-liquid-primary/10 group"
            >
              <div className="text-liquid-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {sys.icon}
              </div>
              <h3 className="text-lg font-bold text-liquid-text">{sys.name}</h3>
              <p className="text-sm text-gray-400 mt-2">{sys.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Technical Solutions: Dark Bento Grid */}
      <section className="bg-[#050505] py-32 px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-liquid-primary font-bold tracking-widest text-[10px] uppercase mb-4">
            Our Expertise
          </p>
          <h2 className="text-6xl font-black text-white tracking-tighter mb-20">
            Technical Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalSolutions.map((solution) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#111111] p-12 rounded-[40px] border border-white/50 relative group hover:border-liquid-primary/50 transition-colors"
              >
                <span className="absolute top-8 right-10 text-6xl font-black text-white/5 group-hover:text-liquid-primary/10 transition-colors">
                  {solution.id}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-10">
                  {solution.desc}
                </p>

                <ul className="space-y-4 border-t border-white/10 pt-8">
                  {solution.sublinks.map((link) => (
                    <li
                      key={link}
                      className="text-xs font-bold text-gray-500 hover:text-white cursor-pointer transition-colors"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Future of Finishing: Light Bento Grid */}
      <section className="py-32 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black text-liquid-text tracking-tighter mb-2">
            The Future of Finishing.
          </h2>
          <p className="text-xl text-gray-400 mb-20">
            Smart, seamless, and guaranteed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 3-Step Quote Box */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#0a1a1f] to-[#024DA1] p-12 rounded-[40px] text-white flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="bg-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  How it works
                </span>
                <h3 className="text-3xl font-bold mt-8">
                  From Vision to Quote in 3 Steps.
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/10">
                <div className="text-center">
                  <Camera className="mx-auto mb-4 opacity-50" />
                  <p className="text-[10px] font-bold uppercase tracking-tighter">
                    Upload Photos
                  </p>
                </div>
                <div className="text-center">
                  <ClipboardCheck className="mx-auto mb-4 opacity-50" />
                  <p className="text-[10px] font-bold uppercase tracking-tighter">
                    Select Service
                  </p>
                </div>
                <div className="text-center">
                  <Mail className="mx-auto mb-4 opacity-50" />
                  <p className="text-[10px] font-bold uppercase tracking-tighter">
                    Get Quotation
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Box */}
            <div className="bg-[#1D1D1F] p-12 rounded-[40px] text-white flex flex-col justify-center items-center text-center">
              <BarChart3 className="text-liquid-primary mb-6" size={40} />
              <h4 className="text-5xl font-black tracking-tighter">500+</h4>
              <p className="text-gray-400 text-sm mt-2">Projects Completed</p>
            </div>

            {/* Trust Signal 1 */}
            <div className="bg-liquid-soft p-12 rounded-[40px] flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
              <ShieldCheck className="text-liquid-primary mb-6" size={32} />
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Unrivaled Reliability.
                </h4>
                <p className="text-sm text-gray-500">
                  Certified industrial-grade protection.
                </p>
              </div>
            </div>

            {/* Trust Signal 2 */}
            <div className="bg-liquid-soft p-12 rounded-[40px] flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
              <Headphones className="text-liquid-primary mb-6" size={32} />
              <div>
                <h4 className="text-xl font-bold mb-2">24/7 Expert Support.</h4>
                <p className="text-sm text-gray-500">
                  Direct access to our coating specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
