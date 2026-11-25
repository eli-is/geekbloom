"use client";

import React from "react";
import { motion } from "motion/react";
import { ShaderBackground } from "@/components/ui/fluted-glass-waves";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  Sparkles,
  Car,
  HeartHandshake
} from "lucide-react";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

export function StoreLocationSection() {
  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* באנר עליון עם רקע השיידר Fluted Glass */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-3xl overflow-hidden mb-16 border border-emerald-500/20 bg-neutral-900/90 shadow-2xl"
      >
        <div className="absolute inset-0 opacity-40">
          <ShaderBackground className="w-full h-full" />
        </div>
        <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs md:text-sm font-bold mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>סוקולוב 66, הרצליה • בואו להרגיש את הקסם מקרוב</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            מוזמנים לבקר אותנו בחנות
          </h2>
          <p className="mt-4 text-neutral-200 text-base md:text-lg leading-relaxed">
            מתלבטים איזה צמח הכי יתאים לחדר? מחפשים בובת פופ נדירה שלא מצאתם בשום מקום?
            אביב מחכה לכם עם חיוך, ייעוץ מכל הלב ואווירה מיוחדת שלא תרצו לצאת ממנה.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="https://waze.com/ul?q=Sokolov%2066%20Herzliya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-lg active:scale-95"
            >
              <Navigation className="w-4 h-4 text-blue-600" />
              <span>נווט עם Waze</span>
            </a>
            <a
              href="https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%90%D7%A0%D7%99%20%D7%91%D7%93%D7%A8%D7%9A%20%D7%9C%D7%97%D7%A0%D7%95%D7%AA%20%D7%91%D7%A1%D7%95%D7%A7%D7%95%D7%9C%D7%95%D7%91%2066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-500 text-black font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>וואטסאפ: 054-4998997</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* פרטי החנות והמפה */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* כרטיס פרטי התקשרות */}
        <div className="p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            כתובת ודרכי הגעה
          </h3>

          <div className="space-y-4 text-neutral-300 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">רחוב סוקולוב 66, הרצליה</p>
                <p className="text-xs text-neutral-400">בלב הרחוב הראשי, גישה נוחה וחניה בקרבת מקום</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">טלפון / וואטסאפ</p>
                <a href="tel:0544998997" className="text-emerald-400 hover:underline">
                  054-4998997
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">שעות פתיחה</p>
                <p className="text-xs text-neutral-400">ראשון – חמישי: 09:30 – 19:30</p>
                <p className="text-xs text-neutral-400">שישי וערבי חג: 09:00 – 15:30</p>
                <p className="text-xs text-neutral-400">שבת: סגור</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">שירות ומשלוחים</p>
                <p className="text-xs text-neutral-400">משלוחי זרים ועציצים בהרצליה, כפר שמריהו, רמת השרון והסביבה</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex items-center gap-3">
            <a
              href="https://www.instagram.com/geek_bloom/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <IconBrandInstagram className="w-4 h-4 text-pink-400" />
              <span>אינסטגרם</span>
            </a>
            <a
              href="https://www.facebook.com/p/Geekbloom-61586780104252/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <IconBrandFacebook className="w-4 h-4 text-blue-400" />
              <span>פייסבוק</span>
            </a>
          </div>
        </div>

        {/* מפה אינטראקטיבית */}
        <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/80 min-h-[350px] relative">
          <iframe
            title="Geek&Bloom Location"
            src="https://maps.google.com/maps?q=Sokolov%2066,%20Herzliya,%20Israel&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[380px] border-0 filter invert contrast-125 grayscale"
            loading="lazy"
            allowFullScreen
          />
          <div className="absolute bottom-4 right-4 z-10 flex gap-2">
            <a
              href="https://maps.google.com/?q=סוקולוב+66+הרצליה"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-neutral-900/95 border border-neutral-700 text-white text-xs font-bold shadow-lg hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              <span>פתח ב-Google Maps</span>
            </a>
            <a
              href="https://waze.com/ul?q=Sokolov%2066%20Herzliya"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-bold shadow-lg hover:bg-blue-500 transition-colors flex items-center gap-1.5"
            >
              <Car className="w-3.5 h-3.5" />
              <span>פתח ב-Waze</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-800/80 py-12 px-4 sm:px-6 lg:px-8 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-extrabold text-xl">
            <span className="text-emerald-400">🌿 Geek</span>
            <span>&</span>
            <span className="text-purple-400">Bloom 👾</span>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            המקום שבו הטבע פוגש את תרבות הגיקים • סוקולוב 66, הרצליה
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-neutral-400">
          <a href="#catalog" className="hover:text-emerald-400 transition-colors">קולקציות</a>
          <a href="#dual-universe" className="hover:text-emerald-400 transition-colors">שני העולמות</a>
          <a href="#reviews" className="hover:text-emerald-400 transition-colors">ביקורות גוגל (77)</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">שעות והגעה</a>
        </div>

        <div className="text-xs text-neutral-500">
          © 2026 Geek&Bloom. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
