"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MessageCircle, ShoppingBag, Heart } from "lucide-react";

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-5 items-center justify-center px-4 max-w-4xl mx-auto text-center z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold backdrop-blur-md">
          <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400" />
          <span>המילים של אביב • מכל הלב</span>
        </div>

        <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          &quot;פרחים הם הרבה יותר ממתנה – הם דרך להגיד תודה, לשמח ולהעלות חיוך&quot;
        </h3>

        <p className="font-normal text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
          נעים להכיר, אני אביב, הבעלים של Geek & Bloom. פתחתי את החנות כדי ליצור מקום מיוחד שמשלב את האהבה לטבע ולצמחים עם הנוסטלגיה והריגוש של עולם האספנות.
          תודה שאתם בוחרים להיות חלק מהדרך שלי! 💚🌱
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="https://spotobuy.com/store/6acb88a05b74df2bc27b1379/b08d4839-ccab-4420-b5ab-897db00a8b69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm sm:text-base transition-all shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>להזמנה בחנות האונליין (SpotOBuy)</span>
          </a>

          <a
            href="https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%A7%D7%A8%D7%90%D7%AA%D7%99%20%D7%A2%D7%9C%20%D7%94%D7%97%D7%A0%D7%95%D7%AA%20%D7%91%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%AA%D7%99%D7%99%D7%A2%D7%A5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm sm:text-base border border-neutral-700 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>דברו ישירות עם אביב</span>
          </a>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
