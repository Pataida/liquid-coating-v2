"use client";
import siteData from "@/data/site-data.json";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, X, Plus } from "lucide-react";

const projects = [
  {
    title: "Hospital ER Floor",
    location: "Harare, Zimbabwe",
    system: "20-Year Legacy Flooring",
    description:
      "4,000sqm of heavy-duty epoxy coating for a chemical manufacturing plant.",
    year: "2025",
    image: "/epoxy-ER.webp",
    gallery: ["/epoxy-ER.webp", "/epoxy-ER1.webp", "/epoxy-ER2.webp"],
  },
  {
    title: "Commercial Heights",
    location: "CBD, Harare",
    system: "10-Year Water Management",
    description:
      "Total building envelope sealing and reflective roof cooling system.",
    year: "2024",
    image: "sealing.webp",
    gallery: ["/sealing.webp", "/sealing1.webp", "/sealing2.webp"],
  },
  {
    title: "Eco-Estate Reservoir",
    location: "Vumba Mountains",
    system: "Liquid Membrane Waterproofing",
    description:
      "Structural sealing for a high-capacity potable water storage system.",
    year: "2026",
    image: "/membrane.webp",
    gallery: ["/membrane.webp", "/membrane1.webp", "/membrane2.webp"],
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-liquid-primary font-bold tracking-widest text-[10px] uppercase"
          >
            Project Portfolio
          </motion.p>
          <h1 className="text-6xl font-black text-liquid-text mt-4 tracking-tighter leading-none">
            Proof of <br /> Performance.
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] bg-liquid-soft mb-6 shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-liquid-text/20 transition-opacity flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-liquid-text px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl active:scale-95 transition-transform"
                  >
                    View More <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-xl font-bold text-liquid-text mb-2">
                  {project.title}
                </h3>
                <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {project.year}
                  </span>
                </div>
                <div className="mt-4 inline-block px-4 py-1.5 bg-liquid-soft rounded-full text-[10px] font-black text-liquid-primary uppercase tracking-tighter">
                  {project.system}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            {/* 1. The Fixed Close Button (Lives outside the scrollable div) */}
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-8 right-8 z-[500] p-4 text-white bg-liquid-text rounded-full shadow-2xl transition-transform active:scale-90"
              aria-label="Close modal"
            >
              <X size={24} strokeWidth={2} />
            </button>

            {/* 2. The Modal Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[400] bg-white/60 backdrop-blur-md overflow-y-auto pt-20 pb-10 px-6"
            >
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-liquid-primary">
                    {selectedProject.system}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-liquid-text tracking-tighter mt-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-500 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {selectedProject.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <img
                        src={img}
                        className="w-full h-auto rounded-[32px] md:rounded-[48px] shadow-2xl object-cover border border-white/50"
                        alt="Project detail"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-20 text-center pb-10">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.8em] opacity-60">
                    Liquid Coating (Pvt) Ltd.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
