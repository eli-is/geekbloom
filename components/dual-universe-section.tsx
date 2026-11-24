"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Leaf, Gamepad2, Sparkles, MessageCircle, ArrowLeft } from "lucide-react";

export function DualUniverseSection() {
  return (
    <section id="dual-universe" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4" />
          <span>שני עולמות • חוויה אחת</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          המקום שבו <span className="text-emerald-400">הטבע</span> פוגש את <span className="text-purple-400">תרבות הגיקים</span>
        </h2>
        <p className="mt-4 text-neutral-400 text-base md:text-lg">
          לא עוד חנות פרחים שגרתית ולא עוד חנות פופים רגילה. ב-Geek&Bloom בסוקולוב 66 הרצליה יצרנו חלל מעוצב שמשלב צמחים עוצרי נשימה עם גיק-קאלצ׳ר אמיתי.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* כרטיס תלת-ממד: עולם הבוטניקה (The Bloom) */}
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-neutral-900/90 relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 border-neutral-800 border w-full h-auto rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-2 text-emerald-400 font-bold text-sm tracking-wide">
                <Leaf className="w-5 h-5 text-emerald-400" />
                עולם הבוטניקה & הפרחים
              </span>
              <span className="text-xs bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-medium">
                The Bloom
              </span>
            </div>

            <CardItem
              translateZ="50"
              className="text-2xl md:text-3xl font-extrabold text-white"
            >
              עציצי בונסאי, סחלבים וזרי פרחים
            </CardItem>

            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-400 text-sm md:text-base mt-3 leading-relaxed"
            >
              צמחים חיים מטהרי אוויר, עציצי בונסאי אומנותיים שנבחרו אחד-אחד, וזרי פרחים רעננים הנשזרים מדי יום.
              כל לקוח מקבל הדרכה מקיפה מאביב על טיפול ואחזקה!
            </CardItem>

            <CardItem translateZ="90" className="w-full mt-6">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden group-hover/card:shadow-2xl group-hover/card:shadow-emerald-500/20">
                <img
                  src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1200&auto=format&fit=crop"
                  alt="עץ בונסאי מרהיב בחנות Geek&Bloom"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-emerald-300 font-medium">
                    🌿 כולל ליווי אישי עד קליטה מלאה בביתכם
                  </span>
                </div>
              </div>
            </CardItem>

            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={30}
                as="a"
                href="#catalog"
                className="px-4 py-2 rounded-xl text-xs md:text-sm font-medium text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>צפה בקטלוג הצמחים</span>
                <ArrowLeft className="w-4 h-4" />
              </CardItem>
              <CardItem
                translateZ={40}
                as="a"
                href="https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A6%D7%9E%D7%97%D7%99%D7%9D%20%D7%95%D7%96%D7%A8%D7%99%20%D7%A4%D7%A8%D7%97%D7%99%D7%9D"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs md:text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>התייעץ עם אביב</span>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* כרטיס תלת-ממד: עולם הגיקים והאספנות (The Geek) */}
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-neutral-900/90 relative group/card hover:shadow-2xl hover:shadow-purple-500/10 border-neutral-800 border w-full h-auto rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-2 text-purple-400 font-bold text-sm tracking-wide">
                <Gamepad2 className="w-5 h-5 text-purple-400" />
                תרבות הגיקים & האספנות
              </span>
              <span className="text-xs bg-purple-950/80 text-purple-300 border border-purple-500/30 px-2.5 py-0.5 rounded-full font-medium">
                The Geek
              </span>
            </div>

            <CardItem
              translateZ="50"
              className="text-2xl md:text-3xl font-extrabold text-white"
            >
              פאנקו פופ, אנימה, מארוול וקלפים
            </CardItem>

            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-400 text-sm md:text-base mt-3 leading-relaxed"
            >
              מבחר ענק של בובות Funko Pop מקוריות, דמויות מדרגון בול, וואן פיס, מארוול ו-DC, לצד קלפי פוקימון ופריטי רטרו.
              המקום המושלם למצוא מתנה עם ערך רגשי אמיתי.
            </CardItem>

            <CardItem translateZ="90" className="w-full mt-6">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden group-hover/card:shadow-2xl group-hover/card:shadow-purple-500/20">
                <img
                  src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop"
                  alt="בובות פאנקו פופ ופיגורים של גיקים ב-Geek&Bloom"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-purple-300 font-medium">
                    ⚡ דגמים בלעדיים, מהדורות Chase ופריטים לאספנים
                  </span>
                </div>
              </div>
            </CardItem>

            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={30}
                as="a"
                href="#catalog"
                className="px-4 py-2 rounded-xl text-xs md:text-sm font-medium text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>צפה בקולקציית הפופים</span>
                <ArrowLeft className="w-4 h-4" />
              </CardItem>
              <CardItem
                translateZ={40}
                as="a"
                href="https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%97%D7%A4%D7%A9%20%D7%A4%D7%90%D7%A0%D7%A7%D7%95%20%D7%A4%D7%95%D7%A4%20%D7%90%D7%95%20%D7%A4%D7%A8%D7%99%D7%98%20%D7%90%D7%A1%D7%A4%D7%A0%D7%95%D7%AA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs md:text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-purple-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>שאל על דגם מסוים</span>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
}
