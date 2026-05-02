"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Droplets,
  Warehouse,
  Flame,
  Pipette,
  Wrench,
  Hammer,
  Settings,
  ShieldAlert,
  Zap,
  Activity,
} from "lucide-react";

const allServices = [
  {
    title: "Waterproofing",
    icon: <Droplets size={32} />,
    desc: "Our waterproofing systems are designed to prevent leaks and protect structures from water damage. Suitable for roofs,decks,tanks, and gutters.",
    challenge: "Water ingress accounts for 80% of structural deterioration.",
    metrics: [
      "UV Reflectivity Index: 85%",
      "Elongation: 300%",
      "Hydrostatic Resistance: 5 bar",
    ],
  },
  {
    title: "Floor Coating (Epoxy)",
    icon: <Warehouse size={32} />,
    desc: "We provide seamless epoxy flooring solutions that are resistant to chemicals, abrasion, and heavy traffic.",
    challenge:
      "Industrial floors face constant chemical and mechanical erosion.",
    metrics: [
      "Compressive Strength: 70MPa",
      "Shore D Hardness: 80",
      "Chemical Grade: A",
    ],
  },
  {
    title: "Fireproofing",
    icon: <Flame size={32} />,
    desc: "Protective coatings that improve fire resistance for structural safety.",
    challenge:
      "Structural failure occurs rapidly under intense thermal stress.",
    metrics: [
      "Thermal Barrier: High",
      "Surface Spread: Class 1",
      "Integrity: 120min+",
    ],
  },
  {
    title: "Guttering",
    icon: <Pipette size={32} />,
    desc: "Complete gutter solutions including installation, repair, and replacement.",
    challenge:
      "Inadequate drainage leads to foundation erosion and wall dampness.",
    metrics: [
      "Material: Galvanised/PVC",
      "Flow Rate: Optimized",
      "Durability: Industrial",
    ],
  },
  {
    title: "Plumbing",
    icon: <Wrench size={32} />,
    desc: "Reliable plumbing services for new installations and maintenance.",
    challenge: "Internal leaks cause hidden structural damage and mold growth.",
    metrics: [
      "Pressure Rated",
      "Leak Detection: Integrated",
      "Material: High-Spec",
    ],
  },
  {
    title: "Concrete Repairs",
    icon: <Hammer size={32} />,
    desc: "We restore and strengthen damaged concrete structures.",
    challenge:
      "Carbonation and chloride attack lead to rebar corrosion and spalling.",
    metrics: ["Bond Strength: >2MPa", "Modulus: 25GPa", "Diffusion: Low"],
  },
  {
    title: "Building Maintenance",
    icon: <Settings size={32} />,
    desc: "We manage and maintain buildings to ensure long-term performance and efficiency.",
    challenge:
      "Asset depreciation accelerates without structured maintenance cycles.",
    metrics: [
      "Lifecycle: 20-Year Plans",
      "Monitoring: Regular",
      "Support: Ongoing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-20">
          <p className="text-liquid-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Specialist Coating Systems
          </p>
          <h1 className="text-6xl md:text-7xl font-black text-liquid-text tracking-tighter leading-none">
            Our Services & <br /> Technical Specs.
          </h1>
          <p className="text-gray-500 mt-8 text-xl max-w-2xl leading-relaxed">
            We offer a comprehensive range of coating and maintenance services
            tailored to residential, commercial, and industrial needs using
            industry-grade systems.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {allServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-liquid-soft rounded-[50px] p-8 md:p-12 border border-transparent hover:border-liquid-primary/20 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Side: Basic Info */}
                <div className="lg:col-span-5">
                  <div className="text-liquid-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-liquid-text mb-6">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.desc}
                  </p>
                </div>

                {/* Right Side: Technical Specs (Combined from Detail Page) */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/50 p-8 rounded-[35px] border border-white/50">
                    <div className="flex items-center gap-2 mb-4 text-orange-600">
                      <ShieldAlert size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        The Challenge
                      </span>
                    </div>
                    <p className="text-sm font-bold text-liquid-text leading-tight italic">
                      &ldquo;{service.challenge}&rdquo;
                    </p>
                  </div>

                  <div className="bg-liquid-text p-8 rounded-[35px] text-white flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-6 text-liquid-primary">
                        <Activity size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                          Technical Metrics
                        </span>
                      </div>
                      <ul className="space-y-4">
                        {service.metrics.map((metric) => (
                          <li
                            key={metric}
                            className="flex items-center gap-3 text-xs font-medium"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-liquid-primary shrink-0" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA Section */}
        <div className="mt-20 p-12 bg-liquid-primary rounded-[50px] text-white flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="text-3xl font-black tracking-tighter mb-2">
              Need a custom technical specification?
            </h4>
            <p className="text-white/80 font-medium">
              Our engineers can design a system specific to your project
              requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-10 py-4 bg-white text-liquid-text rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all whitespace-nowrap"
          >
            Consult Our Team
          </Link>
        </div>
      </div>
    </main>
  );
}
