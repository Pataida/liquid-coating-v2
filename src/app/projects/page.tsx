"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  X,
  Plus,
  CheckCircle2,
  AlertCircle,
  Wrench,
} from "lucide-react";

const projects = [
  /*{
    title: "Commercial Roof Waterproofing",
    service: "Waterproofing",
    location: "Harare",
    year: "2024",
    image: "/sealing.webp",
    description: "Full envelope protection for a multi-storey office complex.",
    problem:
      "Severe water ingress through aging concrete slabs causing internal ceiling damage.",
    solution:
      "Application of a multi-layer fluid-applied monolithic waterproofing membrane.",
    outcome: "100% leak-free structure with improved thermal reflectivity.",
    gallery: [
      "/sealing.webp",
      "/sealing1.webp",
      "/sealing2.webp",
      "/sealing3.webp",
    ],
  },*/
  {
    title: "Millenium Heights (West Prop)",
    service: "Waterproofing",
    location: "Harare",
    year: "2024",
    image: "/sealing-res2.webp", // Ensure these placeholders match your naming convention
    description:
      "Comprehensive waterproofing works across residential apartment blocks.",
    problem:
      "Water ingress issues threatened structural integrity, interior finishes, and long-term property value.",
    solution:
      "We implemented a combination of advanced waterproofing systems, tailored to different exposure conditions and structural requirements.",
    outcome:
      "The buildings are now fully protected against moisture penetration, ensuring longevity, comfort, and property preservation—protecting investments while leaving a lasting mark of quality.",
    gallery: [
      "/roofing_after.webp",
      "/sealing-res1.webp",
      "/sealing-res2.webp",
      "/sealing-res3.webp",
    ],
  },
  {
    title: "Herald House (Studios Upgrade)",
    service: "Floor Coating (Epoxy)",
    location: "Harare",
    year: "2025",
    image: "/epoxy-mirror-finish.webp",
    description:
      "Refurbishment of two studio spaces, combining functional flooring with strong visual identity.",
    problem:
      "The studios required a balance between durability and visual impact, with clear zoning between different working areas.",
    solution:
      "We applied a 2mm self-levelling epoxy system in bright signage yellow to create a bold, energetic workspace on one side, while installing grey tile finishes on the other for contrast and functional separation.",
    outcome:
      "The studios now feature a dynamic, high-visibility environment that enhances productivity and spatial awareness. The contrast between finishes creates a modern, professional look—functional design brought to life with precision and creativity.",
    gallery: [
      "/epoxy-mirror-finish.webp",
      "/epoxy-office1.webp",
      "/epoxy-office2.webp",
      "/epoxy-office3.webp",
    ],
  },
  {
    title: "Aedan Hospital Epoxy Flooring",
    service: "Floor Coating (Epoxy)",
    location: "Harare",
    year: "2025",
    image: "/epoxy-hospital.webp",
    description:
      "Critical upgrade of the Operating Theatre, Emergency Room (ER), and other room spaces. Required was medical grade hygienic, seamless, and durable flooring.",
    problem:
      "Hospital environments demand sterile, easy-to-clean surfaces resistant to chemicals, bacteria, and heavy foot traffic. Existing floors were prone to contamination risks, wear, and difficult maintenance.",
    solution:
      "We installed a 4mm self-levelling epoxy flooring system, finished in a clean white base to enhance brightness and hygiene. A 46cm blue perimeter detail was introduced along the walls to create visual guidance, zoning clarity, and a calming clinical aesthetic.",
    outcome:
      "The facility was transformed into a modern, sterile, and visually structured medical environment. The seamless finish improved hygiene control and ease of cleaning, while the color detailing enhanced navigation and ambiance—a true reflection of our commitment to leaving a beautiful mark in critical spaces.",
    gallery: [
      "/epoxy-hospital.webp",
      "/epoxy-hospital1.webp",
      "/epoxy-hospital2.webp",
      "/epoxy-hospital3.webp",
    ],
  },
  /*{
    title: "Commercial Membrane Installation",
    service: "Waterproofing",
    location: "Harare",
    year: "2024",
    image: "/membrane.webp",
    description: "Heavy-duty membrane application for a shopping complex.",
    problem: "Extensive moisture penetration through the flat roof deck.",
    solution:
      "Installation of specialized bituminous torch-on membrane system.",
    outcome:
      "Complete water barrier with high resistance to structural movement.",
    gallery: ["/membrane.webp", "/membrane1.webp", "/membrane2.webp"],
  },
  {
    title: "Residential Membrane Installation",
    service: "Waterproofing",
    location: "Harare",
    year: "2024",
    image: "/membrane-res.webp",
    description: "Durable foundation and roof protection for a modern home.",
    problem:
      "Rising damp and balcony leaks threatening the home's interior finish.",
    solution: "Multi-surface application of waterproofing sheet membranes.",
    outcome: "Total protection against dampness and external water pressure.",
    gallery: [
      "/membrane-res.webp",
      "/membrane-res1.webp",
      "/membrane-res2.webp",
      "/membrane-res3.webp",
    ],
  },*/
  {
    title: "PCD Pharmaceutical Chemical Distributors (Loading Bay)",
    service: "Floor Coating (Epoxy)",
    location: "Harare",
    year: "2024",
    image: "/epoxy-pharma.webp",
    description:
      "Industrial flooring application for a pharmaceutical distribution loading bay.",
    problem:
      "The loading bay experienced heavy traffic, chemical exposure, and surface wear, making durability and safety a major concern.",
    solution:
      "We installed a 2mm grey epoxy coating system, designed for high abrasion resistance, chemical durability, and slip resistance.",
    outcome:
      "The result is a robust, easy-to-maintain industrial surface capable of handling demanding logistics operations. The clean grey finish enhances professionalism while ensuring long-term performance—delivering reliability where it matters most.",
    gallery: ["/epoxy-pharma.webp"],
  },
  {
    title: "St Anne’s Hospital",
    service: "Waterproofing",
    location: "Harare",
    year: "2024",
    image: "/membrane-hospital.webp",
    description:
      "Waterproofing works across institutional facilities with diverse structural needs.",
    problem:
      "Both sites faced water penetration risks, structural exposure, and maintenance challenges due to aging or environmental factors.",
    solution:
      "We applied a combination of waterproofing systems, including: Torch-on membranes; Cementitious slurry coatings; Polyurethane waterproofing; and Joint cutting and sealing",
    outcome:
      "The structures are now secure, weather-resistant, and protected against long-term damage. These interventions not only solved immediate issues but enhanced durability—ensuring these institutions continue to serve their communities without compromise.",
    gallery: [
      "/membrane-hospital.webp",
      "/membrane-hospital1.webp",
      "/membrane-hospital2.webp",
    ],
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
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
            Our Projects <br /> & Outcomes.
          </h1>
          <p className="text-gray-500 mt-6 text-xl max-w-xl">
            Our projects reflect our commitment to quality, durability, and
            attention to detail.
          </p>
        </header>

        <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group w-[80vw] md:w-full"
            >
              <div className="relative h-[40vh] md:aspect-[4/5] md:h-auto overflow-hidden rounded-[40px] bg-liquid-soft mb-6 shadow-sm">
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
                    View Details <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-xl font-bold text-liquid-text mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {project.year}
                  </span>
                </div>
                <div className="mt-4 inline-block px-4 py-1.5 bg-liquid-soft rounded-full text-[10px] font-black text-liquid-primary uppercase tracking-tighter">
                  {project.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-8 right-8 z-[500] p-4 text-white bg-liquid-text rounded-full shadow-2xl transition-transform active:scale-90"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[400] bg-white overflow-y-auto pt-20 pb-10 px-6"
            >
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-liquid-primary">
                    {selectedProject.service}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-liquid-text tracking-tighter mt-4">
                    {selectedProject.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                  <div className="p-8 bg-liquid-soft rounded-[30px]">
                    <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-4 text-gray-400">
                      <AlertCircle size={14} /> Problem Faced
                    </h4>
                    <p className="text-liquid-text font-bold leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div className="p-8 bg-liquid-soft rounded-[30px]">
                    <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-4 text-gray-400">
                      <Wrench size={14} /> Solution Applied
                    </h4>
                    <p className="text-liquid-text font-bold leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                  <div className="md:col-span-2 p-8 border border-gray-100 rounded-[30px] flex items-center justify-between">
                    <div>
                      <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-4 text-liquid-primary">
                        <CheckCircle2 size={14} /> Final Outcome
                      </h4>
                      <p className="text-2xl font-black text-liquid-text tracking-tight">
                        {selectedProject.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {selectedProject.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="relative aspect-square overflow-hidden rounded-[24px] bg-liquid-soft border border-gray-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt={`Project gallery ${idx + 1}`}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-20 text-center pb-10">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.8em] opacity-60">
                    Leaving a Beautiful Mark.
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
