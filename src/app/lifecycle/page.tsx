"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  Search,
  AlertTriangle,
  Settings2,
  Hammer,
  Activity,
  Shield,
  Zap,
  Award,
  Crown,
} from "lucide-react";

const lifecycleProcess = [
  { step: "1. Inspection", icon: <Search size={20} /> },
  { step: "2. Problem Identification", icon: <AlertTriangle size={20} /> },
  { step: "3. System Design", icon: <Settings2 size={20} /> },
  { step: "4. Professional Application", icon: <Hammer size={20} /> },
  { step: "5. Maintenance & Monitoring", icon: <Activity size={20} /> },
];

const protectionPlans = [
  {
    name: "5-Year Protection Plan",
    subtitle: "Basic Protection",
    icon: <Shield className="text-gray-400" size={32} />,
    bestSuited: ["Residential properties", "Low to moderate exposure areas"],
    scope: [
      "Standard waterproofing membrane application",
      "Surface preparation and cleaning",
      "Crack sealing and minor repairs",
      "Single to double coat system (depending on substrate)",
    ],
    maintenance: ["Annual inspection", "Minor touch-ups where necessary"],
    performance: [
      "Provides short to medium-term protection",
      "Cost-effective solution",
    ],
    accent: "bg-white border-gray-100",
  },
  {
    name: "10-Year Protection Plan",
    subtitle: "Enhanced Protection",
    icon: <Zap className="text-liquid-primary" size={32} />,
    bestSuited: ["Commercial buildings", "Medium to high exposure areas"],
    scope: [
      "Advanced waterproofing system with reinforced membrane",
      "Surface preparation including priming and leveling",
      "Crack repairs and joint sealing",
      "Multi-layer coating system",
    ],
    maintenance: [
      "Scheduled inspections (every 6–12 months)",
      "Preventative maintenance and recoating of high-wear areas",
    ],
    performance: [
      "Improved durability and resistance to weathering",
      "Better protection against UV, water, and structural movement",
    ],
    accent: "bg-liquid-soft border-liquid-primary/30",
  },
  {
    name: "15-Year Protection Plan",
    subtitle: "High Performance System",
    icon: <Award className="text-amber-600" size={32} />,
    bestSuited: ["Industrial projects", "High-risk or high-load structures"],
    scope: [
      "Heavy-duty waterproofing system",
      "Reinforced multi-layer membrane application",
      "Full surface treatment and structural preparation",
      "Use of high-performance materials (polyurethane / advanced coatings)",
    ],
    maintenance: [
      "Bi-annual inspections",
      "Preventative maintenance plan",
      "Scheduled system reinforcement where required",
    ],
    performance: [
      "High resistance to extreme conditions",
      "Long-term structural protection",
      "Reduced risk of failure",
    ],
    accent: "bg-white border-gray-100",
  },
  {
    name: "20-Year Protection Plan",
    subtitle: "Premium System",
    icon: <Crown className="text-liquid-text" size={32} />,
    bestSuited: ["Critical infrastructure", "Long-term investment projects"],
    scope: [
      "Premium waterproofing system with maximum reinforcement",
      "Multi-layer membrane with advanced coating technology",
      "Full structural assessment and preparation",
      "Application of high-thickness, high-durability coatings",
    ],
    maintenance: [
      "Routine inspections and reporting",
      "Planned maintenance program",
      "Lifecycle management support",
    ],
    performance: [
      "Maximum durability and lifespan",
      "Superior resistance to UV, chemicals, and environmental stress",
      "Long-term cost savings through reduced repairs",
    ],
    accent: "bg-liquid-text text-white border-transparent",
  },
];

export default function LifecyclePage() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-20">
          <p className="text-liquid-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Asset Longevity
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-liquid-text tracking-tighter leading-none mb-8">
            Our Maintenance Lifecycle <br /> & Protection Packages
          </h1>
          <p className="text-gray-500 text-xl max-w-4xl leading-relaxed">
            We provide structured maintenance lifecycle packages designed to
            ensure long-term performance of waterproofing systems. These
            packages are tailored based on durability expectations,
            environmental exposure, and client requirements.
          </p>
        </header>

        <div className="mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-10">
            Package Options
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {protectionPlans.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 rounded-[50px] border flex flex-col ${pkg.accent}`}
              >
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-sm font-bold uppercase tracking-widest mt-1 ${pkg.name.includes("20") ? "text-liquid-primary" : "text-gray-400"}`}
                    >
                      ({pkg.subtitle})
                    </p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-3xl">{pkg.icon}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-60">
                      Best Suited For:
                    </h4>
                    <ul className="space-y-3">
                      {pkg.bestSuited.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs font-bold leading-tight"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-liquid-primary shrink-0"
                          />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 mt-8 opacity-60">
                      Scope of Work:
                    </h4>
                    <ul className="space-y-3">
                      {pkg.scope.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs font-bold leading-tight"
                        >
                          <div className="w-1 h-1 rounded-full bg-liquid-primary mt-1.5 shrink-0" />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-60">
                      Maintenance:
                    </h4>
                    <ul className="space-y-3">
                      {pkg.maintenance.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs font-bold leading-tight"
                        >
                          <div className="w-1 h-1 rounded-full bg-liquid-primary mt-1.5 shrink-0" />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 mt-8 opacity-60">
                      Performance:
                    </h4>
                    <ul className="space-y-3">
                      {pkg.performance.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs font-bold leading-tight"
                        >
                          <div className="w-1 h-1 rounded-full bg-liquid-primary mt-1.5 shrink-0" />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-liquid-soft rounded-[60px] p-12 md:p-20">
          <h2 className="text-4xl font-black text-liquid-text tracking-tighter mb-4 text-center">
            Lifecycle Process
          </h2>
          <p className="text-center text-gray-500 mb-16 uppercase text-xs font-black tracking-widest">
            (Applies to all packages)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {lifecycleProcess.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 bg-white rounded-[40px] shadow-sm relative z-10"
              >
                <div className="w-12 h-12 bg-liquid-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-liquid-primary/20">
                  {item.icon}
                </div>
                <p className="text-sm font-black text-liquid-text leading-tight">
                  {item.step}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-gray-200 text-center">
            <p className="text-xl font-bold text-gray-600 italic max-w-3xl mx-auto">
              &quot;Our lifecycle packages ensure that every project is not only
              completed to a high standard but also maintained for long-term
              performance, aligning with our vision of leaving a beautiful
              mark.&quot;
            </p>
            <Link
              href="/contact"
              className="inline-block mt-12 px-12 py-5 bg-liquid-text text-white rounded-full font-bold hover:bg-liquid-primary transition-all shadow-xl"
            >
              Request a Specification
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
