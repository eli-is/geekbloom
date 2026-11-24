"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export function StickyWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3 pointer-events-auto">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-neutral-900/95 border border-emerald-500/30 text-white text-xs shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>אביב זמין בוואטסאפ לכל שאלה!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-0.5"
            aria-label="סגור"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href="https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%A9%D7%9C%20Geek%26Bloom%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%90%D7%95%D7%9C%20%D7%A9%D7%90%D7%9C%D7%94"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-xl shadow-emerald-500/30 transition-all hover:scale-110 active:scale-95"
        aria-label="שלח הודעת וואטסאפ לאביב"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 animate-pulse group-hover:opacity-60" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-black text-emerald-500" />
      </a>
    </div>
  );
}
