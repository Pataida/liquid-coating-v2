"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Droplets, Warehouse, Shield, HardHat, ArrowRight } from "lucide-react";

const systemCategories = [
  {
    title: "Waterproofing",
    slug: "waterproofing",
    icon: <Droplets size={32} />,
    desc: "Complete building envelope protection systems.",
  },
  {
    title: "Flooring",
    slug: "flooring",
    icon: <Warehouse size={32} />,
    desc: "Industrial & commercial high-performance floor coatings.",
  },
  {
    title: "Concrete Repair",
    slug: "concrete-repair",
    icon: <Shield size={32} />,
    desc: "Structural integrity and asset longevity solutions.",
  },
  {
    title: "Mechanical",
    slug: "mechanical",
    icon: <HardHat size={32} />,
    desc: "Specialized industrial performance specifications.",
  },
];

export default function SystemsIndex() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-16">
          <h1 className="text-6xl font-black text-liquid-text tracking-tighter">
            Performance <br /> Systems.
          </h1>
          <p className="text-gray-500 mt-6 text-xl max-w-xl">
            Select a system to view technical specifications and A.B.E. product
            integrations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systemCategories.map((sys) => (
            <Link key={sys.slug} href={`/systems/${sys.slug}`}>
              <motion.div
                whileHover={{ y: -5 }}
                // 'group' is essential here so children can react to the hover
                className="group p-10 bg-liquid-soft rounded-[40px] hover:bg-liquid-primary transition-all duration-500 cursor-pointer"
              >
                {/* Icon: Now turns white on hover */}
                <div className="text-liquid-primary group-hover:text-white mb-6 transition-colors duration-300">
                  {sys.icon}
                </div>

                {/* Title: Already works, but ensuring contrast */}
                <h3 className="text-2xl font-bold text-liquid-text group-hover:text-white mb-2 transition-colors duration-300">
                  {sys.title}
                </h3>

                {/* Description: Changed from grey to light blue/white on hover */}
                <p className="text-gray-500 group-hover:text-blue-100/90 mb-8 transition-colors duration-300">
                  {sys.desc}
                </p>

                {/* Link: Now turns white on hover */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-liquid-primary group-hover:text-white transition-colors duration-300">
                  View Specification <ArrowRight size={14} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
