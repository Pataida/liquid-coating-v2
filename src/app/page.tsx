"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Droplets,
  Warehouse,
  Flame,
  Pipette,
  Wrench,
  Hammer,
  Settings,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

// Full Services List - Sources 41-55 (Exact descriptive text)
const services = [
  {
    name: "Waterproofing",
    icon: <Droplets />,
    desc: "Advanced waterproofing systems designed to protect roofs, decks, tanks, and gutters from leaks, moisture damage, and environmental exposure.",
  },
  {
    name: "Floor Coating (Epoxy)",
    icon: <Warehouse />,
    desc: "Seamless, hygienic, and durable epoxy flooring systems suitable for factories, warehouses, offices, and commercial environments.",
  },
  {
    name: "Fireproofing",
    icon: <Flame />,
    desc: "Protective coatings designed to enhance fire resistance on surfaces such as wood and glass.",
  },
  {
    name: "Guttering",
    icon: <Pipette />,
    desc: "Installation, replacement, and maintenance of gutter systems including galvanised, PVC, and chromadek solutions.",
  },
  {
    name: "Plumbing",
    icon: <Wrench />,
    desc: "Professional plumbing installation and maintenance for both new and existing projects.",
  },
  {
    name: "Concrete Repairs",
    icon: <Hammer />,
    desc: "Restoration and strengthening of concrete structures using high-performance materials.",
  },
  {
    name: "Building Maintenance",
    icon: <Settings />,
    desc: "Comprehensive building care services including upgrades, repairs, and system maintenance.",
  },
];

// Clients/References List - Sources 86-94
const clients = [
  "Arundel School",
  "ASA Construction",
  "West Properties",
  "St Anne's Hospital",
  "Aedan Hospital",
  "CIMAS",
  "PSMAS",
  "Mbuya Dorcas Hospital",
  "Herald",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
      `}</style>

      {/* 1. HERO SECTION - Sources 28-37 */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-white">
        <div className="absolute top-0 right-0 w-full h-full lg:w-3/4">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/40 to-transparent" />
          <img
            src="/epoxy-mirror-finish.webp"
            alt="Liquid Coating"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-liquid-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
              Liquid Coating (Pvt) Ltd
            </p>
            <h1 className="text-6xl lg:text-8xl font-black text-liquid-text tracking-tighter leading-none mb-6">
              Built to Protect.
              <br />
              Designed to Last.
            </h1>
            <p className="text-xl font-bold text-gray-800 mb-2 max-w-xl">
              High-performance waterproofing, flooring, and coating systems for
              residential, commercial, and industrial projects.
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-xl">
              We deliver durable, high-quality coating solutions that protect
              structures from damage, enhance aesthetics, and ensure long-term
              performance.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-liquid-text text-white rounded-full font-bold text-sm hover:bg-liquid-primary transition-all shadow-lg"
              >
                Request a Quote
              </Link>
              <Link
                href="/projects"
                className="px-10 py-4 border border-gray-200 text-liquid-text rounded-full font-bold text-sm hover:bg-gray-50 transition-all"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION - Sources 38-55 */}
      <section className="px-10 py-24 bg-liquid-soft">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-6">Our Services</h2>
          <p className="text-gray-600 mb-16 max-w-2xl text-lg">
            Our services are designed to protect, enhance, and extend the life
            of your building using industry-grade coating systems and
            professional application techniques.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white rounded-[40px] shadow-sm border border-gray-50 hover:shadow-xl transition-all"
              >
                <div className="text-liquid-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US - Sources 56-61 */}
      <section className="bg-black py-32 px-10 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black tracking-tighter mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              "High-quality, industry-grade materials",
              "Proven resistance to UV, chemicals, and extreme conditions",
              "Skilled and experienced team",
              "Long-lasting and cost-effective solutions",
              "Professional project execution",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-6 border-l-2 border-liquid-primary pl-8"
              >
                <CheckCircle2
                  className="text-liquid-primary shrink-0"
                  size={32}
                />
                <p className="text-xl font-bold leading-tight">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS PREVIEW (BEFORE/AFTER) - Sources 62-69 */}
      <section className="py-32 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-6">Projects Preview</h2>
          <p className="text-xl text-gray-400 mb-16">
            We take pride in delivering results that are both functional and
            visually impressive.
          </p>

          <div className="flex flex-col gap-12">
            {[
              {
                title: "Waterproofing Project",
                b: "/sealing2.webp",
                a: "/sealing.webp",
              },
              {
                title: "Epoxy Flooring Finish",
                b: "/epoxy_before.webp",
                a: "/epoxy-mirror-finish.webp",
              },
              {
                title: "Waterproof Roofing Solution",
                b: "/roofing_before.webp",
                a: "/roofing_after.webp",
              },
            ].map((proj, i) => (
              <div key={i} className="bg-liquid-soft p-10 rounded-[50px]">
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-liquid-text">
                  {proj.title}
                </h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 rounded-3xl overflow-hidden relative h-[400px]">
                    <img
                      src={proj.b}
                      className="w-full h-full object-cover"
                      alt="Before"
                    />
                    <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white px-5 py-2 rounded-full font-bold text-xs">
                      BEFORE
                    </div>
                  </div>
                  <div className="flex-1 rounded-3xl overflow-hidden relative h-[400px]">
                    <img
                      src={proj.a}
                      className="w-full h-full object-cover"
                      alt="After"
                    />
                    <div className="absolute top-6 left-6 bg-liquid-primary text-white px-5 py-2 rounded-full font-bold text-xs">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MAINTENANCE LIFECYCLE (WORD-FOR-WORD) - Sources 70-83 */}
      <section className="py-32 px-10 bg-liquid-soft">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-6">Maintenance Lifecycle</h2>
          <p className="text-xl text-gray-500 mb-16 max-w-3xl">
            Our work does not end at installation. We provide a complete
            lifecycle approach to ensure long-term performance and durability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                s: "1. Inspection",
                t: "We assess the condition of the structure and identify problem areas.",
              },
              {
                s: "2. Diagnosis",
                t: "We analyse the root cause of issues such as leaks, cracks, or wear.",
              },
              {
                s: "3. System Selection",
                t: "We choose the most suitable coating system based on the environment and requirements.",
              },
              {
                s: "4. Application",
                t: "Professional installation using proven techniques and high-quality materials.",
              },
              {
                s: "5. Maintenance & Monitoring",
                t: "Ongoing support to ensure continued performance and longevity.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[35px] shadow-sm border border-gray-50"
              >
                <h4 className="font-black text-liquid-primary mb-6 uppercase text-[10px] tracking-widest">
                  {item.s}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {item.t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENTS CAROUSEL - Sources 84-94 */}
      <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 mb-12">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-gray-300 text-center md:text-left">
            Successfully Worked With
          </h2>
        </div>
        <div className="relative">
          <div className="animate-scroll">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="mx-16 text-4xl font-black text-liquid-text whitespace-nowrap uppercase tracking-tighter italic cursor-default opacity-100"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION - [cite: 95-100] */}
      <section className="py-32 px-10 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-10 leading-tight">
            Need a durable and reliable solution for your project?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-12 py-5 bg-white text-black rounded-full font-bold hover:bg-liquid-primary hover:text-white transition-all shadow-lg text-lg"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="px-12 py-5 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
