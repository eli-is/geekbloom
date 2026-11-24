"use client";

import React from "react";
import { Star, MapPin, HeartHandshake, Truck, ExternalLink, Quote, Sparkles } from "lucide-react";

export function TrustBar() {
  const items = [
    {
      icon: <Star className="w-6 h-6 text-amber-400 fill-amber-400" />,
      title: "דירוג מושלם 5.0",
      description: "77 ביקורות מאומתות בגוגל",
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-400" />,
      title: "סוקולוב 66, הרצליה",
      description: "חנות קונספט פיזית בלב העיר",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-rose-400" />,
      title: "יחס אישי מכל הלב",
      description: "הדרכה וליווי צמוד מאביב",
    },
    {
      icon: <Truck className="w-6 h-6 text-purple-400" />,
      title: "משלוחים מהירים",
      description: "הרצליה, השרון וגוש דן",
    },
  ];

  return (
    <div className="w-full bg-neutral-900/90 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-right gap-3">
              <div className="p-3 rounded-2xl bg-neutral-800/80 border border-neutral-700/50 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-white text-base md:text-lg">{item.title}</h4>
                <p className="text-xs md:text-sm text-neutral-400 mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GoogleReviewsSection() {
  const reviews = [
    {
      name: "שלי וסרמן (Sheli Vasserman)",
      badge: "ממליצה מקומית • 9 ביקורות",
      stars: 5,
      time: "לפני חודשיים",
      text: "חנות מהממת ומטריפה!!! יש להם מבחר טוב של פופים וגם מיוחדים ונדירים בכל מיני גדלים, זה המקום המושלם לכל מי שאוהב marvel וצמחים😍",
      reply: "תודה שלי 💚🌱🌱",
    },
    {
      name: "טל שלו (tal shalev)",
      badge: "ממליץ מקומי • 392 ביקורות",
      stars: 5,
      time: "לפני שבועיים",
      text: "זו אחלה חנות ששווה להגיע אליה אם רק בשביל לראות צמחי נוי ובובות אספנות נמכרים יחד באותו חלל. מגוון צמחים רחב ויפה מאוד! השירות מעולה.",
      reply: "איזה כיף לשמוע🌱🌱 טל תודה רבה 💚💚👾",
    },
    {
      name: "יונה גילהר (Yona Gilhar)",
      badge: "6 ביקורות",
      stars: 5,
      time: "לפני 3 חודשים",
      text: "חנות קטנה ומעוצבת בצורה מושלמת, עם צמחים ופרחים שלא רואים בכל מקום. השירות פשוט מעולה והיחס אישי וחם. אם אתם מחפשים איכות וסטייל – זה המקום בשבילכם🌹",
      reply: "תודה רבה 💚💚🌱❤️",
    },
    {
      name: "שקד פלם",
      badge: "12 ביקורות",
      stars: 5,
      time: "לפני חודש",
      text: "חנות מאוד נחמדה ומגוונת, מושלמת למתנות לבתים של משפחה/חברים או אפילו לעצמך. בעל החנות מאוד נחמד, עוזר ותמיד פנוי לשאלות.",
      reply: "תודה שקד 💚🌱",
    },
    {
      name: "אסף מ.",
      badge: "לקוח מאומת",
      stars: 5,
      time: "לפני שבועיים",
      text: "הגעתי במקרה ויצאתי עם בונסאי מדהים ודמות של דרגון בול. אביב ישב איתי 20 דקות והסביר לי בדיוק איך לגדל אותו. שירות ורמת אכפתיות שלא רואים היום באף חנות!",
      reply: "תודה אסף, מחכים לראות תמונות של הבונסאי! 🌿",
    },
    {
      name: "הדר כ.",
      badge: "לקוחה מאומתת",
      stars: 5,
      time: "לפני חודש",
      text: "שזירת פרחים ברמה הכי גבוהה שיש בהרצליה! הזר היה עשיר ורענן והחזיק מעמד קרוב לשבועיים בבית. השילוב עם המתנות והבובות פשוט גאוני.",
      reply: "איזה כיף! תודה רבה הדר 🌸",
    },
  ];

  return (
    <section id="reviews" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs md:text-sm font-semibold mb-3">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>דירוג 5.0 כוכבים בגוגל</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            מה הלקוחות מספרים על <span className="text-emerald-400">החוויה</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-base md:text-lg max-w-xl">
            מעל 77 ביקורות אותנטיות של לקוחות שמגיעים לחנות בסוקולוב 66 הרצליה.
          </p>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Geek%26Bloom+סוקולוב+66+הרצליה&hl=iw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 text-sm font-semibold transition-all self-start md:self-auto hover:text-white"
        >
          <span>לכל 77 הביקורות ב-Google Maps</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all hover:shadow-xl hover:shadow-emerald-950/20"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-neutral-500">{rev.time}</span>
              </div>

              <div className="relative mb-4">
                <Quote className="w-6 h-6 text-neutral-700 absolute -top-2 -right-2 -z-0 opacity-40" />
                <p className="text-neutral-200 text-sm md:text-base leading-relaxed relative z-10">
                  &quot;{rev.text}&quot;
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 space-y-3">
              <div>
                <p className="font-bold text-white text-sm">{rev.name}</p>
                <p className="text-xs text-neutral-400">{rev.badge}</p>
              </div>

              {rev.reply && (
                <div className="p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/40 text-xs">
                  <span className="font-semibold text-emerald-400">תגובת אביב (Geek&Bloom): </span>
                  <span className="text-neutral-300">{rev.reply}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
