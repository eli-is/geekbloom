"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
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
    const isHovered = hovered === index;
    const isOtherHovered = hovered !== null && hovered !== index;

    const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
      e.stopPropagation();
      setHovered((prev) => (prev === index ? null : index));
    };

    return (
      <button
        type="button"
        onClick={handleTap}
        onMouseEnter={() => {
          if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
            setHovered(index);
          }
        }}
        onMouseLeave={() => {
          if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
            setHovered(null);
          }
        }}
        className={cn(
          "rounded-3xl relative bg-neutral-900 overflow-hidden h-72 sm:h-80 md:h-96 w-full text-right p-0 transition-all duration-300 ease-out cursor-pointer group border border-neutral-800 outline-none select-none",
          isHovered && "scale-[1.03] shadow-2xl shadow-emerald-500/30 border-emerald-500 ring-2 ring-emerald-400 z-20",
          isOtherHovered && "scale-[0.96] border-neutral-800/60"
        )}
      >
        {/* תמונה עם טשטוש ישיר על אלמנט ה-img - עוקף את באג ה-WebKit של Safari באייפון */}
        <img
          src={card.src}
          alt={card.title}
          className={cn(
            "object-cover absolute inset-0 w-full h-full transition-all duration-300 will-change-transform",
            isOtherHovered
              ? "blur-md opacity-40 scale-95 brightness-75"
              : "blur-0 opacity-100 scale-100 group-hover:scale-105"
          )}
          style={{
            WebkitFilter: isOtherHovered ? "blur(8px) brightness(0.7)" : "blur(0px) brightness(1)",
            filter: isOtherHovered ? "blur(8px) brightness(0.7)" : "blur(0px) brightness(1)",
          }}
        />

        {/* שכבת עמעום וטשטוש עליונה המבטיחה טשטוש מושלם בכל דפדפן ומכשיר נייד */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-300 pointer-events-none",
            isOtherHovered ? "bg-black/60 backdrop-blur-md opacity-100" : "opacity-0"
          )}
        />

        {/* שכבת טקסט וכותרת - מופיעה על הכרטיס שנבחר/מרחף */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 transition-all duration-300 z-10",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          )}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/50 text-emerald-300 text-xs font-bold w-fit mb-2 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>נבחר לצפייה במיקוד</span>
          </div>

          <div className="text-xl sm:text-2xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-snug">
            {card.title}
          </div>
        </div>

        {/* חיווי אינטראקטיבי במובייל כאשר אף כרטיס לא נבחר */}
        {!isHovered && !isOtherHovered && (
          <div className="absolute bottom-3 right-3 z-10 md:hidden">
            <span className="px-2.5 py-1 rounded-full bg-black/75 border border-neutral-700 text-neutral-300 text-[11px] font-semibold backdrop-blur-sm shadow-md">
              לחץ למיקוד 👆
            </span>
          </div>
        )}
      </button>
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
    <div className="w-full">
      {/* הנחיה ברורה למשתמשי מובייל ומחשב */}
      <div className="text-center mb-6">
        <p className="text-xs text-neutral-400 flex items-center justify-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>במחשב: רחפו מעל תמונה | במובייל: הקישו על תמונה כדי להתמקד בה ולטשטש את השאר</span>
        </p>
      </div>

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
    </div>
  );
}
