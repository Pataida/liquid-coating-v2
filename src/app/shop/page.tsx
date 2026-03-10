"use client";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { useState } from "react";
import MobileFilter from "@/components/MobileFilter";

// Define this clearly so both Desktop and Mobile logic can see it
const categories = ["All", "Waterproofing", "Flooring", "Structural"];

const products = [
  {
    id: 1,
    name: "super laycryl",
    category: "Waterproofing",
    use: "Flashings, parapets, and roof protrusions.",
    features: ["UV Resistant", "Flexible", "Water-based"],
    isStocked: true,
  },
  {
    id: 2,
    name: "abecote 337",
    category: "Flooring",
    use: "Protective coating for dairy, food, and beverage plants.",
    features: ["Chemical Resistant", "Hygienic", "Hard-wearing"],
    isStocked: true,
  },
  {
    id: 3,
    name: "epidermix 344",
    category: "Structural",
    use: "Structural wet-to-dry concrete adhesive.",
    features: ["High Bond Strength", "Moisture Tolerant"],
    isStocked: true,
  },
  {
    id: 4,
    name: "unigum dual-reinforced",
    category: "Waterproofing",
    use: "Torch-on membrane for heavy-duty tanking.",
    features: ["Dual-Reinforced", "Torch-applied"],
    isStocked: false,
  },
];

export default function ShopPage() {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <main className="pt-24 md:pt-40 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-liquid-text tracking-tighter leading-none">
              Product <br /> Portfolio.
            </h1>
            <p className="text-gray-500 mt-4 max-w-md text-sm md:text-base">
              High-performance A.B.E. chemicals and membranes for industrial
              applications.
            </p>
          </div>

          {/* Desktop Filter Pill - Hidden on Mobile */}
          <div className="hidden md:flex gap-2 bg-liquid-soft p-1.5 rounded-full border border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === cat
                    ? "bg-liquid-primary text-white shadow-lg"
                    : "text-gray-500 hover:text-liquid-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Mobile Filter Component - Now it sees the 'categories' variable */}
        <MobileFilter
          categories={categories}
          active={filter}
          onSelect={setFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 border border-gray-100 rounded-[32px] md:rounded-[40px] hover:shadow-xl transition-all group flex flex-col bg-white"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-liquid-primary bg-blue-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {!product.isStocked && (
                  <span className="text-[10px] font-bold text-orange-500 uppercase italic">
                    Special Order
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-liquid-text capitalize mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                {product.use}
              </p>

              <div className="space-y-2 mb-8">
                {product.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-xs font-medium text-gray-400"
                  >
                    <div className="w-1 h-1 bg-liquid-primary rounded-full" />{" "}
                    {f}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 py-3 bg-liquid-soft text-liquid-text rounded-2xl text-xs font-bold hover:bg-gray-200 transition-colors">
                  <FileDown size={14} /> TDS
                </button>
                <button className="flex items-center justify-center gap-2 py-3 bg-liquid-text text-white rounded-2xl text-xs font-bold hover:bg-liquid-primary transition-colors">
                  Inquire
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
