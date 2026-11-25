"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const isCurrent = hovered === index;
    const isOtherHovered = hovered !== null && hovered !== index;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setHovered(isCurrent ? null : index)}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-2xl relative bg-neutral-900 overflow-hidden h-72 sm:h-80 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer group border border-neutral-800",
          isCurrent && "ring-2 ring-emerald-400 scale-[1.02] shadow-2xl shadow-emerald-500/25 border-emerald-500/50",
          isOtherHovered && "opacity-70 md:opacity-100 md:blur-sm md:scale-[0.98]"
        )}
      >
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500 will-change-transform"
        />

        {/* שכבת גרדיאנט לתאימות קריאות מלאה */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 transition-all duration-300",
            isCurrent ? "opacity-100" : "opacity-90 md:opacity-0 group-hover:opacity-100"
          )}
        >
          {isCurrent && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/30 border border-emerald-400/50 text-emerald-300 text-[11px] font-bold w-fit mb-2 backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 text-emerald-300" />
              <span>נבחר לצפייה</span>
            </motion.div>
          )}

          <div className="text-xl md:text-2xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-snug">
            {card.title}
          </div>
        </div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";

type CardType = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  // במובייל איפוס אוטומטי לאחר חוסר פעילות כדי לא להשאיר כרטיסים עמומים
  useEffect(() => {
    if (hovered !== null) {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => {
        setHovered(null);
      }, 3500);
    }
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [hovered]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
