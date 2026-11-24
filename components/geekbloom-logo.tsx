"use client";

import React from "react";

interface GeekBloomLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  variant?: "badge" | "clean";
}

export function GeekBloomLogo({
  className = "",
  size = "md",
  withTagline = true,
  variant = "badge",
}: GeekBloomLogoProps) {
  const sizeClasses = {
    sm: "text-base md:text-lg",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-4xl",
  };

  const tagClasses = {
    sm: "text-[9px] tracking-wider",
    md: "text-[10px] md:text-[11px] tracking-widest",
    lg: "text-xs md:text-sm tracking-widest",
  };

  if (variant === "clean") {
    return (
      <div className={`inline-flex flex-col items-center select-none text-center ${className}`}>
        <div className="relative flex items-center gap-1.5">
          <span
            className={`font-serif font-black tracking-tight ${sizeClasses[size]} text-[#0b2918] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Geek<span className="text-[#10b981] font-sans mx-0.5">&</span>Bloom
          </span>
          <span className="text-emerald-600 text-lg md:text-xl">🍃</span>
        </div>

        {withTagline && (
          <span
            className={`font-serif font-semibold text-[#1e5334] uppercase mt-0.5 ${tagClasses[size]}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Where Nature Meets Geek Culture
          </span>
        )}
      </div>
    );
  }

  // תג פרימיום ירוק-יער עם מסגרת מוזהבת - תואם ב-100% לשלט החנות הפיזית בסוקולוב 66
  return (
    <div
      className={`inline-flex flex-col items-center justify-center select-none text-center px-3.5 py-1.5 md:px-5 md:py-2 rounded-2xl bg-gradient-to-b from-[#092215] via-[#0b2918] to-[#04120a] border border-[#d4af37]/50 shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:border-[#d4af37]/80 transition-all duration-300 ${className}`}
    >
      <div className="relative flex items-center gap-2">
        <span
          className={`font-serif font-black tracking-normal ${sizeClasses[size]} bg-gradient-to-r from-[#fff7d6] via-[#e5c171] to-[#b88c34] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Geek<span className="text-emerald-400 font-sans mx-0.5">&</span>Bloom
        </span>
        <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-950/90 border border-emerald-500/60 shadow-inner">
          <span className="text-emerald-300 text-xs md:text-sm leading-none animate-pulse">
            🍃
          </span>
        </div>
      </div>

      {withTagline && (
        <span
          className={`font-serif tracking-[0.18em] uppercase font-semibold text-[#f1d89b] mt-0.5 ${tagClasses[size]} drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Where Nature Meets Geek Culture
        </span>
      )}
    </div>
  );
}
