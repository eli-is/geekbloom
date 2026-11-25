"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Sparkles, Move, ZoomIn, Search, Target } from "lucide-react";

type Hotspot = {
  label: string;
  xPercent: number;
  yPercent: number;
  icon: string;
};

const HOTSPOTS: Hotspot[] = [
  { label: "פיקאצ'ו", xPercent: 24, yPercent: 78, icon: "⚡" },
  { label: "קלף צ'רמנדר", xPercent: 35, yPercent: 80, icon: "🔥" },
  { label: "בובת דקו (Funko)", xPercent: 14, yPercent: 62, icon: "🦸‍♂️" },
  { label: "עציץ בולבזאור", xPercent: 82, yPercent: 78, icon: "🌱" },
  { label: "זרי פרחים טריים", xPercent: 52, yPercent: 50, icon: "🌸" },
];

export default function LiquidGlassDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ w: 800, h: 520 });
  const [lensPos, setLensPos] = useState({ x: 180, y: 260 });
  const [zoom, setZoom] = useState(2.2);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // גודל עדשת זכוכית המגדלת - רספונסיבי למובייל
  const lensDiameter = isMobile ? 160 : 220;
  const lensRadius = lensDiameter / 2;

  // מדידת גודל הקונטיינר באופן דינמי
  const updateSize = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ w: rect.width, h: rect.height });
      setIsMobile(rect.width < 640);
    }
  }, []);

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [updateSize]);

  // עדכון מיקום העדשה
  const setPositionFromCoords = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(lensRadius, Math.min(rect.width - lensRadius, clientX - rect.left));
    const y = Math.max(lensRadius, Math.min(rect.height - lensRadius, clientY - rect.top));
    setLensPos({ x, y });
    setHasInteracted(true);
  };

  // גרירה באמצעות Pointer Events (עכבר ומגע כאחד)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    setIsDragging(true);
    setPositionFromCoords(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.stopPropagation();
    setPositionFromCoords(e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
      setIsDragging(false);
    }
  };

  // לחיצה על התמונה מזיזה את זכוכית המגדלת מיד לנקודה
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setPositionFromCoords(e.clientX, e.clientY);
  };

  // התמקדות אוטומטית במוקד עניין
  const goToHotspot = (hotspot: Hotspot) => {
    const x = (hotspot.xPercent / 100) * containerSize.w;
    const y = (hotspot.yPercent / 100) * containerSize.h;
    setLensPos({
      x: Math.max(lensRadius, Math.min(containerSize.w - lensRadius, x)),
      y: Math.max(lensRadius, Math.min(containerSize.h - lensRadius, y)),
    });
    setHasInteracted(true);
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* סרגל שליטה עליון: רמות זום ונקודות מיקוד */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
        {/* כפתורי זום */}
        <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-700/80 p-1 rounded-full shadow-md">
          <span className="text-xs text-neutral-400 px-2 flex items-center gap-1">
            <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
            <span>זום:</span>
          </span>
          {[1.6, 2.2, 3.0].map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setZoom(lvl)}
              className={`px-2.5 sm:px-3 py-1 text-xs font-bold rounded-full transition-all ${
                zoom === lvl
                  ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                  : "text-neutral-300 hover:text-white hover:bg-neutral-800"
              }`}
            >
              x{lvl}
            </button>
          ))}
        </div>

        {/* נקודות מיקוד מהירות */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-xs text-neutral-400 hidden sm:inline flex items-center gap-1">
            <Target className="w-3.5 h-3.5 text-emerald-400" />
            <span>התמקד ב:</span>
          </span>
          {HOTSPOTS.map((h) => (
            <button
              key={h.label}
              type="button"
              onClick={() => goToHotspot(h)}
              className="px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/70 hover:border-emerald-500/60 transition-all flex items-center gap-1"
            >
              <span>{h.icon}</span>
              <span>{h.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* אזור התמונה הראשי - touch-pan-y מאפשר גלילה רגילה של הדף במובייל */}
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        className="relative w-full h-[22rem] sm:h-[32rem] md:h-[38rem] rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl cursor-crosshair group touch-pan-y"
      >
        {/* תמונת הרקע הראשית באיכות גבוהה */}
        <img
          src="/images/hybrid-combo-hero.jpg"
          alt="Geek&Bloom Flowers and Collectibles"
          className="absolute inset-0 size-full object-cover filter brightness-[0.88] contrast-[1.05]"
          draggable={false}
        />

        {/* שכבת טקסט מעוצבת ברקע */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-black/30">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-xs font-bold mb-2 sm:mb-3 border border-emerald-400/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>זכוכית מגדלת אינטראקטיבית – לחצו או גררו</span>
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl leading-tight font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Where Nature
            <br />
            Meets Geek.
          </h2>
          <p className="mt-2 text-emerald-300 font-bold text-xs sm:text-base md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            סוקולוב 66, הרצליה • פרחים, בונסאי ופריטי אספנות
          </p>
        </div>

        {/* עדשת זכוכית המגדלת האופטית האמיתית (touch-none מוגדר רק עליה לגרירה) */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`absolute rounded-full cursor-grab active:cursor-grabbing select-none z-30 touch-none transition-transform ${
            isDragging ? "scale-105" : "hover:scale-102"
          }`}
          style={{
            width: lensDiameter,
            height: lensDiameter,
            left: lensPos.x - lensRadius,
            top: lensPos.y - lensRadius,
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.7), inset 0 2px 6px rgba(255,255,255,0.75), inset 0 -3px 8px rgba(0,0,0,0.6)",
          }}
        >
          {/* מסגרת זהב יוקרתית של זכוכית מגדלת בוטיק */}
          <div className="absolute inset-0 rounded-full border-4 border-[#d4af37] ring-2 ring-emerald-500/50 pointer-events-none z-30" />

          {/* אפקט החזרת אור (Specular Sheen) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-white/10 pointer-events-none z-20" />

          {/* תצוגת ההגדלה האופטית החדה (Magnified Image View) */}
          <div className="absolute inset-0 rounded-full overflow-hidden z-10 bg-neutral-900">
            <div
              className="absolute origin-top-left"
              style={{
                width: containerSize.w,
                height: containerSize.h,
                transform: `scale(${zoom})`,
                transformOrigin: "0 0",
                left: -(lensPos.x * zoom - lensRadius),
                top: -(lensPos.y * zoom - lensRadius),
              }}
            >
              <img
                src="/images/hybrid-combo-hero.jpg"
                alt="Magnified View"
                className="w-full h-full object-cover filter brightness-105 contrast-110"
                draggable={false}
              />
              {/* הטקסט מוגדל גם כן בתוך העדשה */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-black/20">
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white drop-shadow-lg">
                  Where Nature<br />Meets Geek.
                </h2>
              </div>
            </div>
          </div>

          {/* תגית חיווי של זכוכית המגדלת בתחתית העדשה */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
            <span className="px-2.5 py-0.5 rounded-full bg-black/85 border border-[#d4af37]/70 text-[#f1d89b] text-[9px] sm:text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm shadow-md whitespace-nowrap">
              זכוכית מגדלת {zoom}x
            </span>
          </div>

          {/* צלב כוונת עדין במרכז העדשה */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-30">
            <div className="w-4 h-0.5 bg-white rounded-full" />
            <div className="h-4 w-0.5 bg-white rounded-full -ml-2" />
          </div>
        </div>

        {/* טיפ קטן שמוצג בהתחלה לפני אינטראקציה ראשונה */}
        {!hasInteracted && (
          <div className="absolute top-3 left-3 z-20 pointer-events-none animate-bounce">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/80 border border-emerald-500/50 text-emerald-300 text-[11px] font-semibold backdrop-blur-sm shadow-lg">
              <Move className="w-3 h-3 text-emerald-400" />
              <span>גרור את העדשה או לחץ בכל נקודה!</span>
            </span>
          </div>
        )}
      </div>

      {/* הסבר קצר מתחת לאינטראקציה */}
      <div className="mt-3 text-center text-xs text-neutral-400 flex items-center gap-2">
        <Search className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span>
          זכוכית המגדלת מאפשרת לראות ברזולוציה גבוהה את הפרטים של בובות האספנות, קלפי הפוקימון וזרי הפרחים הטריים.
        </span>
      </div>
    </div>
  );
}
