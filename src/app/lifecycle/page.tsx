"use client";
import { motion } from "framer-motion";
import { Check, Shield, Zap, Award } from "lucide-react";

const tiers = [
  {
    name: "5-Year Protection",
    price: "Standard",
    icon: <Shield className="text-gray-400" />,
    description:
      "Reactive maintenance and essential waterproofing for short-term asset security.",
    features: [
      "Annual Visual Inspection",
      "Standard Leak Warranty",
      "Basic Surface Cleaning",
      "Emergency Repair Access",
    ],
    accent: "border-gray-200",
  },
  {
    name: "10-Year Performance",
    price: "Professional",
    icon: <Zap className="text-liquid-primary" />,
    description:
      "Proactive infrastructure management designed for high-traffic commercial environments.",
    features: [
      "Bi-Annual Technical Audits",
      "Thermal Moisture Mapping",
      "Chemical Resistance Testing",
      "Priority 24hr Response",
      "Coating Integrity Reports",
    ],
    accent: "border-liquid-primary shadow-xl scale-105 z-10 bg-white",
  },
  {
    name: "20-Year Legacy",
    price: "Ultimate",
    icon: <Award className="text-yellow-600" />,
    description:
      "Total building envelope management. We treat your infrastructure as our own legacy.",
    features: [
      "Quarterly Robotic Audits",
      "Automatic Component Upgrades",
      "Full Structural Insurance",
      "Dedicated Asset Manager",
      "Resale Value Certification",
    ],
    accent: "border-yellow-600/30",
  },
];

export default function LifecyclePage() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-liquid-primary font-bold tracking-widest text-xs uppercase"
          >
            Asset Management
          </motion.span>
          <h1 className="text-5xl font-black text-liquid-text mt-4 tracking-tighter">
            Infrastructure <br /> Longevity Systems.
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[40px] border-2 flex flex-col h-full ${tier.accent}`}
            >
              <div className="mb-6">{tier.icon}</div>
              <h3 className="text-2xl font-bold text-liquid-text">
                {tier.name}
              </h3>
              <p className="text-gray-500 text-sm mt-4 mb-8 leading-relaxed">
                {tier.description}
              </p>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-medium text-gray-700"
                  >
                    <Check size={16} className="text-liquid-primary" />{" "}
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-liquid-text text-white rounded-2xl font-bold text-sm hover:bg-liquid-primary transition-colors">
                Request Specification
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
