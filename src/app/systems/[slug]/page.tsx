"use client";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
// Add HardHat and any others used in your systemData here:
import {
  Droplets,
  Shield,
  Warehouse,
  Zap,
  ChevronRight,
  HardHat,
} from "lucide-react";

const systemData: any = {
  waterproofing: {
    title: "Building Envelope & Waterproofing",
    icon: <Droplets className="w-12 h-12 text-liquid-primary" />,
    problem: "Water ingress accounts for 80% of structural deterioration.",
    solution:
      "Our multi-layer fluid-applied systems create a seamless, monolithic barrier.",
    specs: [
      "UV Reflectivity Index: 85%",
      "Elongation: 300%",
      "Hydrostatic Resistance: 5 bar",
    ],
    abe_integration: ["Super Laycryl", "Unigum Dual-Reinforced"],
  },
  flooring: {
    title: "Mechanical & Floor Protection",
    icon: <Warehouse className="w-12 h-12 text-liquid-primary" />,
    problem: "Industrial floors face constant chemical and mechanical erosion.",
    solution:
      "Heavy-duty epoxy systems engineered for impact and slip resistance.",
    specs: [
      "Compressive Strength: 70MPa",
      "Shore D Hardness: 80",
      "Chemical Grade: A",
    ],
    abe_integration: ["Abecote 337", "Abecote 400 Hi-Build"],
  },
  "concrete-repair": {
    title: "Structural Concrete Enhancement",
    icon: <Shield className="w-12 h-12 text-liquid-primary" />,
    problem:
      "Carbonation and chloride attack lead to rebar corrosion and spalling.",
    solution:
      "Migratory corrosion inhibitors and high-strength structural mortars.",
    specs: [
      "Bond Strength: >2MPa",
      "Modulus of Elasticity: 25GPa",
      "Chloride Ion Diffusion: Low",
    ],
    abe_integration: ["Epidermix 344", "DuraRep FR", "Abe silane"],
  },
  mechanical: {
    title: "Industrial Mechanical Systems",
    icon: <HardHat className="w-12 h-12 text-liquid-primary" />,
    problem:
      "Precision grouting and joint sealing in high-vibration environments.",
    solution:
      "Non-shrink grouts and high-movement polyurethanes for infrastructure joints.",
    specs: [
      "Expansion Control: 25%",
      "Grout Flow: 150mm",
      "Vibration Damping: High",
    ],
    abe_integration: ["DuraGrout", "DuraFlex", "Abe sealants"],
  },
};

export default function SystemDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const data = systemData[slug];

  if (!data)
    return (
      <div className="pt-40 text-center">System Specification Not Found.</div>
    );

  return (
    <main className="pt-32 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-10 pb-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6 mb-12"
        >
          <div className="p-4 bg-liquid-soft rounded-3xl">{data.icon}</div>
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-liquid-text">
              {data.title}
            </h1>
            <p className="text-liquid-primary font-bold uppercase text-[10px] tracking-[0.3em]">
              Performance Specification
            </p>
          </div>
        </motion.div>

        {/* The "Why" vs "How" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <section>
            <h3 className="text-xs uppercase font-bold text-gray-400 mb-4">
              The Challenge
            </h3>
            <p className="text-xl text-liquid-text leading-snug">
              {data.problem}
            </p>
          </section>
          <section>
            <h3 className="text-xs uppercase font-bold text-gray-400 mb-4">
              The System Solution
            </h3>
            <p className="text-gray-600 leading-relaxed">{data.solution}</p>
          </section>
        </div>

        {/* Technical Specs Bento Box */}
        <div className="mt-16 p-10 bg-liquid-text text-white rounded-[40px] grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.specs.map((spec: string) => (
            <div key={spec} className="border-l border-white/20 pl-6">
              <p className="text-xs text-white/50 uppercase mb-2">
                Technical Metric
              </p>
              <p className="font-bold text-lg">{spec}</p>
            </div>
          ))}
        </div>

        {/* Product Integration Link */}
        <div className="mt-16 border-t border-gray-100 pt-10">
          <h3 className="text-lg font-bold mb-6">
            Specified A.B.E. Components:
          </h3>
          <div className="flex flex-wrap gap-4">
            {data.abe_integration.map((product: string) => (
              <div
                key={product}
                className="px-6 py-3 bg-liquid-soft rounded-full text-sm font-bold flex items-center gap-2 group cursor-pointer hover:bg-liquid-primary hover:text-white transition-all"
              >
                {product}{" "}
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
