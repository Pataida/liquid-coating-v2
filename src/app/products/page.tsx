"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileDown,
  Droplets,
  HardHat,
  LayoutGrid,
  Hammer,
  X,
  Info,
} from "lucide-react";
import MobileFilter from "@/components/MobileFilter";

const categories = [
  "All",
  "Waterproofing",
  "Facades & Renders",
  "Tiling & Grouting",
  "Technical Mortars",
];

const brandInventory: any = {
  SIM: {
    title: "SIM Waterproofing",
    groups: [
      {
        name: "Bituminous Membranes",
        category: "Waterproofing",
        items: [
          {
            name: "SIM Penguen Series",
            app: "APP Plastomeric / Multi-purpose Roofing",
            img: "/sim_penguen.webp",
          },
          {
            name: "SIM Panda Series",
            app: "Heavy Duty / Infrastructure & Bridges",
            img: "/sim_panda_series.webp",
          },
          {
            name: "SIM Fok Series",
            app: "SBS Elastomeric / Cold Climate Flexibility",
            img: "/sim_fok_series.webp",
          },
          {
            name: "SIM Princo Series",
            app: "Standard / Residential Waterproofing",
            img: "/sim_princo_series.webp",
          },
          {
            name: "SIM Mineral Surface",
            app: "UV Protected Capping Layer",
            img: "/sim_mineral_surface.webp",
          },
          {
            name: "SIM Quickshingle",
            app: "Patterned Bituminous Roofing Roll",
            img: "/sim_quickshingle.webp",
          },
          {
            name: "SIM Alfo Membrane",
            app: "Aluminum Faced Reflective Membrane",
            img: "/sim_alfo_membrane.webp",
          },
          {
            name: "SIM Unbreakable Shingle",
            app: "Fiberglass Reinforced Aesthetic Roofing",
            img: "/sim_unbreakable_shingle.webp",
          },
        ],
      },
      {
        name: "Innovative & Self-Adhesive",
        category: "Waterproofing",
        items: [
          {
            name: "SIM Self Tapes",
            app: "Self-Adhesive Detailing Tapes",
            img: "/sim_self_tapes.webp",
          },
          {
            name: "SIM Self Membrane",
            app: "Cold-Applied Self-Adhesive Sheet",
            img: "/sim_self_membrane.webp",
          },
          {
            name: "SIM Proof Membrane",
            app: "Pre-applied Foundation Waterproofing",
            img: "/sim_proof_membrane.webp",
          },
          {
            name: "SIM Marine Membrane",
            app: "Saltwater Resistant Structural Protection",
            img: "/sim_marine_membrane.webp",
          },
          {
            name: "SIM Panda VIA",
            app: "Viaduct & Bridge Deck Protection",
            img: "/sim_panda_via.webp",
          },
          {
            name: "SIM Power VIA",
            app: "High-Stress Infrastructure Membrane",
            img: "/sim_power_via.webp",
          },
          {
            name: "SIM Garden Membrane",
            app: "Anti-Root Rooftop Garden Protection",
            img: "/sim_garden_membrane.webp",
          },
          {
            name: "SIM See Cross Laminated",
            app: "High Puncture Resistance Film Membrane",
            img: "/sim_laminated_membrane.webp",
          },
        ],
      },
      {
        name: "Synthetic Membranes (PVC/TPO)",
        category: "Waterproofing",
        items: [
          {
            name: "SIM Plan Basecap",
            app: "PVC Foundation Protection",
            img: "/sim_basecap.webp",
          },
          {
            name: "SIM Plan Basecap Signal",
            app: "Yellow Leak-Detection Layer",
            img: "/sim_basecap_signal.webp",
          },
          {
            name: "SIM Plan Watercap",
            app: "Antimicrobial Drinking Water Tanks",
            img: "/sim_watercap.webp",
          },
          {
            name: "SIM Plan Lakecap - UV",
            app: "UV Stable Artificial Lakes",
            img: "/sim_lakecap_uv.webp",
          },
          {
            name: "SIM Plan Lakecap UV Plus",
            app: "Reinforced Dam & Irrigation Liner",
            img: "/sim_lakecap_uv-plus.webp",
          },
          {
            name: "SIM Plan Rooftop - UV",
            app: "Atmospheric Resistant Exposed PVC",
            img: "/sim_roofcap_uv.webp",
          },
        ],
      },
      {
        name: "Panels & Accessories",
        category: "Waterproofing",
        items: [
          {
            name: "SIM PI Plak",
            app: "Rigid Wall Cladding Panels",
            img: "/sim_pi_plak.webp",
          },
          {
            name: "SIM Foreks",
            app: "Lightweight Detail Foam Boards",
            img: "/sim_foreks.webp",
          },
          {
            name: "SIM Astar (Primer)",
            app: "Bituminous Adhesion Promoter",
            img: "/sim_astar_primer.webp",
          },
          {
            name: "SIM Ex 2K",
            app: "Two-Component Liquid Detailing",
            img: "/sim_ex_2k.webp",
          },
          {
            name: "SIM Polas",
            app: "Polymer Liquid Damp-proofing",
            img: "/sim_polas.webp",
          },
          {
            name: "SIM Drainage Board",
            app: "HDPE Membrane Protection Layer",
            img: "/sim_drainage_board.webp",
          },
          {
            name: "SIM FIX PU Sealant",
            app: "High-Elasticity Joint Sealing",
            img: "/sim_pu_sealant.webp",
          },
          {
            name: "SIM Board XPS",
            app: "Extruded Thermal Insulation",
            img: "/sim_board_xps.webp",
          },
        ],
      },
    ],
  },
  "Saveto WP": {
    title: "Saveto Waterproofing",
    groups: [
      {
        name: "Liquid & Cementitious",
        category: "Waterproofing",
        items: [
          {
            name: "SAVETO W.P. 1020",
            app: "Cementitious Slurry for Reservoirs",
            img: "/saveto_wp1020.webp",
          },
          {
            name: "SAVETO W.P. 1045",
            app: "Heavy Duty High-Pressure Slurry",
            img: "/saveto_wp1045.webp",
          },
          {
            name: "SAVETO PU Sealant",
            app: "Facade & Roof Expansion Joints",
            img: "/saveto_vetoflex_sealant.webp",
          },
          {
            name: "SAVETO Crack Filler",
            app: "Filling Paint and Plaster Cracks",
            img: "/saveto_crack_filler.webp",
          },
          {
            name: "SAVETO Vetotop AC441",
            app: "Industrial High-Performance Coating",
            img: "/saveto_vetotop_ac441.webp",
          },
        ],
      },
    ],
  },
  "Saveto Mortars": {
    title: "Saveto Technical",
    groups: [
      {
        name: "Renders & Plasters",
        category: "Facades & Renders",
        items: [
          {
            name: "SAVETO Spatter Dash",
            app: "Tartasha Premiere Scratch Coat",
            img: "/saveto_spatter_dash.webp",
          },
          {
            name: "SAVETO Thick Render",
            app: "Base Coat Plaster for Blocks",
            img: "/saveto_thick_render.webp",
          },
          {
            name: "SAVETO Finish WR",
            app: "Smooth Water-Resistant Plaster",
            img: "/saveto_finish_wr.webp",
          },
          {
            name: "SAVETO Thin Render",
            app: "Fine-Grain Layer Leveling",
            img: "/saveto_thin_render.webp",
          },
          {
            name: "SAVETO Smooth Render",
            app: "Sleek Aesthetic Wall Finish",
            img: "/saveto_smooth_render.webp",
          },
          {
            name: "SAVETO Base WR",
            app: "Water Resistant Base Coat",
            img: "/saveto_base_wr.webp",
          },
        ],
      },
      {
        name: "Tiling & Grouting",
        category: "Tiling & Grouting",
        items: [
          {
            name: "SAVETO Ceramic Fix",
            app: "Standard Porous Tile Adhesive",
            img: "/saveto_ceramic_tile.webp",
          },
          {
            name: "SAVETO Porcelain Fix",
            app: "Enhanced Low-Porosity Adhesive",
            img: "/saveto_porcelain_tile.webp",
          },
          {
            name: "SAVETO Marble Fix",
            app: "Natural Stone & Heavy Marble",
            img: "/saveto_marble_fix.webp",
          },
          {
            name: "SAVETO Pool Fix",
            app: "Submerged Tile Bonding",
            img: "/saveto_pool_fix.webp",
          },
          {
            name: "SAVETO Grout Pure",
            app: "High-Performance Joint Filler",
            img: "/saveto_grout.webp",
          },
          {
            name: "SAVETO Pool Grout",
            app: "Chemical Resistant Pool Joints",
            img: "/saveto_pool_grout.webp",
          },
          {
            name: "SAVETO Artificial Stone",
            app: "Specialized Mortar for Stones",
            img: "/saveto_artificial_stone.webp",
          },
        ],
      },
      {
        name: "Putties & Admixtures",
        category: "Technical Mortars",
        items: [
          {
            name: "Vetonit Al Comanda",
            app: "Gypsum Smooth Putty & Filler",
            img: "/saveto_vetonit_al_comanda.webp",
          },
          {
            name: "SAVETO Stucco",
            app: "Base Leveling Rough Putty",
            img: "/saveto_stucco.webp",
          },
          {
            name: "SAVETO Putty SP 100",
            app: "High Adhesion Repair Putty",
            img: "/saveto_putty_sp100.webp",
          },
          {
            name: "SAVETO Saviatto",
            app: "Decorative Mineral Facade Finish",
            img: "/saveto_saviatto.webp",
          },
          {
            name: "SAVETO Vetotouch Europa",
            app: "Premium Textured Wall Finish",
            img: "/saveto_vetotouch_europa.webp",
          },
          {
            name: "SAVETO Bond",
            app: "PVA Admixture & Bonding Agent",
            img: "/saveto_bond.webp",
          },
        ],
      },
    ],
  },
};

const brandCards = [
  {
    id: "sim-wp",
    category: "Waterproofing",
    icon: <Droplets size={18} />,
    brandKey: "SIM",
    name: "SIM Waterproofing",
    application: "Bituminous & Synthetic Membranes.",
    image: "/sim_penguen.webp",
  },
  {
    id: "saveto-wp",
    category: "Waterproofing",
    icon: <Droplets size={18} />,
    brandKey: "Saveto WP",
    name: "Saveto Waterproofing",
    application: "Liquid & Cementitious Systems.",
    image: "/saveto_wp1020.webp",
  },
  {
    id: "saveto-facades",
    category: "Facades & Renders",
    icon: <HardHat size={18} />,
    brandKey: "Saveto Mortars",
    name: "Saveto Exterior",
    application: "Finishing Renders & Facade Systems.",
    image: "/saveto_finish_wr.webp",
  },
  {
    id: "saveto-tiling",
    category: "Tiling & Grouting",
    icon: <LayoutGrid size={18} />,
    brandKey: "Saveto Mortars",
    name: "Saveto Tiling",
    application: "Professional Adhesives & Grouts.",
    image: "/saveto_ceramic_tile.webp",
  },
  {
    id: "saveto-mortars",
    category: "Technical Mortars",
    icon: <Hammer size={18} />,
    brandKey: "Saveto Mortars",
    name: "Saveto Technical",
    application: "Bonding Agents & Repair Putties.",
    image: "/saveto_bond.webp",
  },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedBrandData, setSelectedBrandData] = useState<any>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<
    string | null
  >(null);

  useEffect(() => {
    document.body.style.overflow = selectedBrandData ? "hidden" : "unset";
  }, [selectedBrandData]);

  const filteredCards =
    activeFilter === "All"
      ? brandCards
      : brandCards.filter((c) => c.category === activeFilter);

  return (
    <main className="relative pt-32 pb-20 bg-white min-h-screen overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: "url('/icon.png')",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-liquid-text tracking-tighter leading-none mb-6">
              Product <br /> Portfolio.
            </h1>
            <h3 className="text-2xl md:text-7xl font-black text-liquid-text tracking-tighter leading-none mb-6">
              Liquid Coating are the official distributors of SIM and SAVETO in
              Malawi, Zambia and Zimabwe, offering a comprehensive range of
              waterproofing and technical mortar solutions for construction
              professionals.
            </h3>
            <p className="text-gray-500 max-w-lg font-medium">
              Explore the full range of SIM and SAVETO engineering solutions.
            </p>
          </div>
          <div className="hidden md:flex gap-2 bg-liquid-soft p-1.5 rounded-full border border-gray-100 flex-wrap justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === cat ? "bg-liquid-primary text-white shadow-lg" : "text-gray-400 hover:text-liquid-primary"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <MobileFilter
          categories={categories}
          active={activeFilter}
          onSelect={setActiveFilter}
        />

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredCards.map((brand) => (
              <motion.div
                layout
                key={brand.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-liquid-soft/40 p-6 md:p-10 rounded-[48px] flex flex-col justify-between transition-shadow hover:shadow-2xl hover:shadow-liquid-primary/5 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3 text-liquid-primary">
                      <div className="p-2 bg-white rounded-xl shadow-sm">
                        {brand.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">
                        {brand.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-liquid-text capitalize tracking-tighter mb-4">
                    {brand.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-bold mb-8 leading-relaxed">
                    <span className="text-liquid-text block text-[9px] font-black uppercase tracking-[0.3em] mb-2 opacity-40">
                      Specialization
                    </span>
                    {brand.application}
                  </p>
                  <div className="aspect-video overflow-hidden rounded-[24px] bg-gray-200 border border-white/50 mb-10">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <button
                    onClick={() => {
                      setSelectedBrandData(brandInventory[brand.brandKey]);
                      setActiveCategoryFilter(brand.category);
                    }}
                    className="flex items-center justify-center gap-2 py-4 bg-liquid-text text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-liquid-primary transition-all active:scale-95 shadow-lg"
                  >
                    <Info size={14} /> See Products
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedBrandData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white/80 backdrop-blur-xl flex flex-col items-center overflow-y-auto"
          >
            <div className="sticky top-0 w-full z-[220] px-6 py-8 md:px-12 bg-white/40 backdrop-blur-md border-b border-gray-100/20">
              <div className="max-w-5xl mx-auto flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-400 mb-1 block">
                    Brand Inventory
                  </span>
                  <h2 className="text-2xl md:text-4xl font-black text-liquid-text tracking-tighter italic">
                    {activeCategoryFilter === "Facades & Renders"
                      ? "Saveto Exterior"
                      : activeCategoryFilter === "Tiling & Grouting"
                        ? "Saveto Tiling"
                        : selectedBrandData.title}
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setSelectedBrandData(null);
                    setActiveCategoryFilter(null);
                  }}
                  className="p-4 bg-liquid-text text-white rounded-full hover:scale-110 active:scale-95 transition-all shadow-lg"
                >
                  <X size={20} strokeWidth={3} />
                </button>
              </div>
            </div>

            <div className="max-w-5xl w-full px-6 md:px-12 py-16">
              <div className="space-y-20">
                {selectedBrandData.groups
                  .filter(
                    (group: any) => group.category === activeCategoryFilter,
                  )
                  .map((group: any, i: number) => (
                    <motion.section
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-center gap-6 mb-10">
                        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-liquid-primary whitespace-nowrap">
                          {group.name}
                        </h3>
                        <div className="h-[1px] w-full bg-gray-100" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {group.items.map((item: any, j: number) => (
                          <div
                            key={j}
                            className="bg-liquid-soft/30 p-8 rounded-[40px] border border-white/50 flex flex-col justify-between group hover:shadow-xl transition-all"
                          >
                            <div>
                              <div className="aspect-square w-full rounded-[24px] overflow-hidden mb-6 bg-white border border-white">
                                <img
                                  src={item.img}
                                  alt={item.name}
                                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                                />
                              </div>
                              <h4 className="text-2xl font-black text-liquid-text mb-2 tracking-tight">
                                {item.name}
                              </h4>
                              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-6 leading-relaxed">
                                {item.app}
                              </p>
                            </div>
                            <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-liquid-primary hover:gap-4 transition-all">
                              <FileDown size={14} /> TDS Document
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.section>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
