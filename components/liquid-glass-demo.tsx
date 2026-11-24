"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { Sparkles, Move } from "lucide-react";

type LiquidGlassDemoProps = {
  shape?: "circle" | "pill";
  scale?: number;
  aberration?: number;
  bevelDepth?: number;
  frost?: number;
  tint?: number;
};

export default function LiquidGlassDemo({
  shape = "circle",
  scale = 48,
  aberration = 14,
  bevelDepth = 37,
  frost = 0.4,
  tint = 0.12,
}: LiquidGlassDemoProps) {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const size = shape === "pill" ? { w: 320, h: 140 } : { w: 220, h: 220 };

  return (
    <div
      ref={constraintsRef}
      className="relative h-[32rem] sm:h-[36rem] w-full overflow-hidden bg-neutral-900 select-none"
    >
      {/* תמונה אמיתית של Geek&Bloom ברקע */}
      <img
        src="/images/hybrid-combo-hero.jpg"
        alt="Geek&Bloom Flowers and Collectibles"
        className="absolute inset-0 size-full object-cover filter brightness-90"
        draggable={false}
      />

      {/* שכבת טקסט מעוצבת ברקע */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/35 backdrop-blur-[1px]">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>גררו את עדשת הזכוכית הנוזלית מעל התמונה</span>
        </span>
        <p className="text-4xl sm:text-6xl md:text-7xl leading-[1.05] font-black tracking-tight text-white drop-shadow-lg">
          Where Nature
          <br />
          Meets Geek.
        </p>
        <p className="mt-4 text-emerald-300 font-semibold text-sm sm:text-lg drop-shadow">
          סוקולוב 66, הרצליה • פרחים, בונסאי ופריטי אספנות
        </p>
      </div>

      {/* עדשת הזכוכית הנגררת (Liquid Glass Lens) */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.08}
        whileHover={{ scale: 1.05 }}
        whileDrag={reduceMotion ? undefined : { scale: 1.1 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing touch-none z-30"
        style={{
          width: size.w,
          height: size.h,
        }}
      >
        <LiquidGlass
          radius={size.h / 2}
          scale={scale}
          aberration={aberration}
          bevelDepth={bevelDepth}
          frost={frost}
          tint={tint}
          className="size-full flex flex-col items-center justify-center p-4 text-center cursor-grab active:cursor-grabbing"
        >
          <div className="pointer-events-none flex flex-col items-center gap-1">
            <Move className="w-6 h-6 text-white/90 drop-shadow animate-pulse" />
            <span className="text-xs font-bold text-white tracking-wider uppercase drop-shadow">
              גרור אותי
            </span>
            <span className="text-[10px] text-white/80 font-medium">
              Liquid Glass Lens
            </span>
          </div>
        </LiquidGlass>
      </motion.div>
    </div>
  );
}
