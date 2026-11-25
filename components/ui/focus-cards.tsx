"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

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
    const isHovered = hovered === index;
    const isOtherHovered = hovered !== null && hovered !== index;

    return (
      <div
        onClick={() => setHovered(isHovered ? null : index)}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-2xl relative bg-neutral-900 overflow-hidden h-64 sm:h-80 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer group border border-neutral-800 will-change-[filter,transform]",
          isOtherHovered && "blur-sm scale-[0.98] opacity-60",
          isHovered && "scale-[1.02] shadow-2xl shadow-emerald-500/20 border-emerald-500/60 ring-2 ring-emerald-400/50 z-10"
        )}
      >
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
        />

        {/* שכבת טקסט - מופיעה רק בריחוף במחשב או בלחיצה/בחירה במובייל, בדיוק כמו במחשב */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-snug">
            {card.title}
          </div>
        </div>
      </div>
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
