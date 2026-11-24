"use client";

import React from "react";

interface GeekBloomLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
}

export function GeekBloomLogo({
  className = "",
  size = "md",
  withTagline = true,
}: GeekBloomLogoProps) {
  const sizeClasses = {
    sm: "text-lg md:text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-5xl",
  };

  const tagClasses = {
    sm: "text-[9px] tracking-widest",
    md: "text-[11px] md:text-xs tracking-widest",
    lg: "text-xs md:text-sm tracking-widest",
  };

  return (
    <div className={`inline-flex flex-col items-center select-none text-center ${className}`}>
      {/* לוגו בסגנון שלט החנות בסוקולוב 66 */}
      <div className="relative flex items-center gap-1.5">
        <span
          className={`font-serif font-black tracking-tight ${sizeClasses[size]} bg-gradient-to-r from-[#fbf2d5] via-[#e2c77d] to-[#cba34e] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(203,163,78,0.25)]`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Geek<span className="text-[#68d391]">&</span>Bloom
        </span>
        <span className="text-emerald-400 text-lg md:text-2xl -mt-2 animate-pulse">
          🍃
        </span>
      </div>

      {withTagline && (
        <span
          className={`font-sans font-medium text-emerald-300/90 uppercase mt-0.5 ${tagClasses[size]} drop-shadow`}
        >
          Where Nature Meets Geek Culture
        </span>
      )}
    </div>
  );
}
