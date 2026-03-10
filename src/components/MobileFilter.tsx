"use client";
import { useEffect, useRef } from "react";

interface MobileFilterProps {
  categories: string[];
  active: string;
  onSelect: (cat: string) => void;
}

export default function MobileFilter({
  categories,
  active,
  onSelect,
}: MobileFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // When the active category changes, find that button and center it
    const activeElement = document.getElementById(`mobile-filter-${active}`);
    if (activeElement && scrollRef.current) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center", // This centers the active button
      });
    }
  }, [active]);

  return (
    <div className="md:hidden w-full mb-10 overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 px-6 pb-4 no-scrollbar snap-x touch-pan-x scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            id={`mobile-filter-${cat}`}
            onClick={() => onSelect(cat)}
            className={`
              snap-center shrink-0 px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-300
              ${
                active === cat
                  ? "bg-liquid-primary text-white shadow-lg"
                  : "bg-liquid-soft text-gray-400"
              }
            `}
          >
            {cat}
          </button>
        ))}
        {/* Spacer to help the last item center correctly */}
        <div className="shrink-0 w-6" />
      </div>
    </div>
  );
}
