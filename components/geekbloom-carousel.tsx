"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Sparkles, MessageCircle, Heart, ShieldCheck, Flame, ShoppingBag } from "lucide-react";

export function GeekBloomCarousel() {
  const cards = catalogData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="catalog" className="w-full py-16 md:py-24 bg-neutral-900/60 border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm md:text-base">
          <Sparkles className="w-4 h-4" />
          <span>הקולקציות והשילובים שלנו</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              העולמות של <span className="text-emerald-400">Geek&Bloom</span>
            </h2>
            <p className="mt-2 text-neutral-400 text-base md:text-lg max-w-2xl">
              לחצו על כל כרטיס כדי לגלות את המגוון, את הסיפור מאחוריו ואת הטיפים האישיים של אביב.
            </p>
          </div>
          <a
            href="https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%A7%D7%98%D7%9C%D7%95%D7%92%20%D7%91%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-900/40"
          >
            <MessageCircle className="w-4 h-4" />
            <span>שאל את אביב בוואטסאפ</span>
          </a>
        </div>
      </div>

      <Carousel items={cards} />
    </section>
  );
}

// תכני המודאלים הנפתחים בלחיצה
function HybridComboContent() {
  return (
    <div className="space-y-6 text-neutral-200">
      <div className="bg-neutral-800/80 p-6 md:p-8 rounded-2xl border border-neutral-700/60">
        <h3 className="text-xl md:text-2xl font-bold text-emerald-400 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-emerald-400" />
          השילוב שאף אחד לא ציפה לו – והפך ללהיט
        </h3>
        <p className="mt-3 text-neutral-300 text-base md:text-lg leading-relaxed">
          למה לבחור בין עציץ חי ומרגיע לבין פריט אספנות שמעלה חיוך? ב-Geek&Bloom יצרנו את המארזים ההיברידיים:
          סוקולנט עמיד או עץ בונסאי מרהיב, המוצב לצד בובת Funko Pop מקורית של הדמות האהובה עליכם (גרוט משומרי הגלקסיה, פוקימון, מארוול, דרגון בול ועוד).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-neutral-800/50 border border-neutral-700/40">
          <h4 className="font-bold text-white text-lg flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-400" />
            מתנה מושלמת
          </h4>
          <p className="text-sm text-neutral-300 mt-2">
            מחפשים מתנה למשרד חדש, יום הולדת לבן/בת זוג, או מתנה לגיימר שיש לו כבר הכל? זה הפריט שתמיד גונב את ההצגה.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-neutral-800/50 border border-neutral-700/40">
          <h4 className="font-bold text-white text-lg flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            הדרכה מלאה לטיפול
          </h4>
          <p className="text-sm text-neutral-300 mt-2">
            כל מארז מגיע עם הסבר מפורט מאביב על כמות האור וההשקיה, כדי שהצמח ישגשג ויפרח לאורך שנים.
          </p>
        </div>
      </div>

      <div className="text-center pt-4">
        <a
          href="https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%94%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%95%D7%9F%20%D7%91%D7%9E%D7%90%D7%A8%D7%96%20%D7%94%D7%99%D7%91%D7%A8%D7%99%D7%93%D7%99%20%D7%A9%D7%9C%20%D7%A6%D7%9E%D7%97%20%D7%95%D7%A4%D7%90%D7%A0%D7%A7%D7%95"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base transition-all shadow-xl shadow-emerald-500/20"
        >
          <MessageCircle className="w-5 h-5" />
          <span>הרכב מארז מותאם אישית בוואטסאפ</span>
        </a>
      </div>
    </div>
  );
}

function FunkoCollectiblesContent() {
  return (
    <div className="space-y-6 text-neutral-200">
      <div className="bg-neutral-800/80 p-6 md:p-8 rounded-2xl border border-neutral-700/60">
        <h3 className="text-xl md:text-2xl font-bold text-purple-400 flex items-center gap-2">
          <Flame className="w-6 h-6 text-purple-400" />
          פאנקו פופ ופיגורים מקוריים – למתחילים ולאספנים כבדים
        </h3>
        <p className="mt-3 text-neutral-300 text-base md:text-lg leading-relaxed">
          מבחר נדיר של בובות פאנקו פופ (Funko Pop) מקוריות, כולל מהדורות מיוחדות, גרסאות Chase, מהדורות בלעדיות (Exclusives) וגדלים שונים.
          אנחנו מקפידים על אריזות שלמות ומושלמות (Mint condition) עבור אספנים.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/40 text-center">
          <span className="text-2xl">⚡</span>
          <h4 className="font-bold text-white mt-1">אנימה ודרגון בול</h4>
          <p className="text-xs text-neutral-400 mt-1">סון גוקו, וג׳יטה, וואן פיס, נארוטו, קוטל השדים ועוד</p>
        </div>
        <div className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/40 text-center">
          <span className="text-2xl">🦸‍♂️</span>
          <h4 className="font-bold text-white mt-1">Marvel & DC</h4>
          <p className="text-xs text-neutral-400 mt-1">איירון מן, ספיידרמן, באטמן, גרוט ודמויות קלאסיות</p>
        </div>
        <div className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/40 text-center">
          <span className="text-2xl">🎮</span>
          <h4 className="font-bold text-white mt-1">גיימינג ורטרו</h4>
          <p className="text-xs text-neutral-400 mt-1">פוקימון, מריו, סוניק ודמויות נוסטלגיות</p>
        </div>
      </div>

      <div className="text-center pt-4">
        <a
          href="https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%97%D7%A4%D7%A9%20%D7%A4%D7%90%D7%A0%D7%A7%D7%95%20%D7%A4%D7%95%D7%A4%20%D7%9E%D7%A1%D7%95%D7%99%D7%99%D7%9D%2C%20%D7%99%D7%A9%20%D7%9C%D7%9B%D7%9D%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-base transition-all shadow-xl shadow-purple-600/30"
        >
          <MessageCircle className="w-5 h-5" />
          <span>ברר זמינות דגם מסוים בוואטסאפ</span>
        </a>
      </div>
    </div>
  );
}

function BonsaiPlantsContent() {
  return (
    <div className="space-y-6 text-neutral-200">
      <div className="bg-neutral-800/80 p-6 md:p-8 rounded-2xl border border-neutral-700/60">
        <h3 className="text-xl md:text-2xl font-bold text-emerald-400 flex items-center gap-2">
          🌱 עציצי בונסאי אומנותיים, סחלבים וצמחים נדירים
        </h3>
        <p className="mt-3 text-neutral-300 text-base md:text-lg leading-relaxed">
          עציצי בונסאי מרהיבים שנבחרו בקפידה מהמשתלות האיכותיות ביותר בישראל. כל עץ בונסאי הוא יצירת אמנות של ממש
          שמעניקה שלווה, עומק ויוקרה לחלל הסלון או המשרד. בנוסף תמצאו אצלנו סוקולנטים, סחלבים מרשימים וצמחי בית ירוקים.
        </p>
      </div>

      <div className="bg-emerald-950/40 border border-emerald-500/30 p-5 rounded-xl">
        <h4 className="font-bold text-emerald-300 text-lg">הבטחת הצלחה של אביב 🌿</h4>
        <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
          &quot;הרבה אנשים חוששים שבונסאי או צמח מיוחד ינבול להם. אצלנו אתם לא יוצאים בלי הדרכה מדויקת, ומעבר לכך – המספר שלי זמין לכם תמיד לשלוח תמונה, לשאול שאלות ולקבל ליווי אישי עד שהצמח נקלט באהבה.&quot;
        </p>
      </div>

      <div className="text-center pt-4">
        <a
          href="https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%A2%D7%A6%D7%99%D7%A6%D7%99%20%D7%94%D7%91%D7%95%D7%A0%D7%A1%D7%90%D7%99%20%D7%95%D7%94%D7%A6%D7%9E%D7%97%D7%99%D7%9D%20%D7%A9%D7%99%D7%A9%20%D7%91%D7%9E%D7%9C%D7%90%D7%99"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          <span>התייעץ עם אביב על צמח שמתאים לבית שלך</span>
        </a>
      </div>
    </div>
  );
}

function FreshFlowersContent() {
  return (
    <div className="space-y-6 text-neutral-200">
      <div className="bg-neutral-800/80 p-6 md:p-8 rounded-2xl border border-neutral-700/60">
        <h3 className="text-xl md:text-2xl font-bold text-rose-400 flex items-center gap-2">
          🌸 שזירת זרי פרחים טריים עם מגע אומנותי
        </h3>
        <p className="mt-3 text-neutral-300 text-base md:text-lg leading-relaxed">
          זרי פרחים חיים ורעננים הנשזרים מדי יום בהרבה תשומת לב ואהבה. זרים רומנטיים, זרי שבת חגיגיים, סידורי פרחים לאירועים,
          וזרי יום הולדת צבעוניים עם משלוח מהיר בהרצליה והסביבה.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/40">
          <h4 className="font-bold text-white">טריות ללא פשרות</h4>
          <p className="text-xs text-neutral-300 mt-1">פרחים שנבחרים ישירות ממיטב המגדלים, עם עמידות מקסימלית באגרטל.</p>
        </div>
        <div className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/40">
          <h4 className="font-bold text-white">משלוחים בהרצליה והשרון</h4>
          <p className="text-xs text-neutral-300 mt-1">משלוח מהיר, עטוף באלגנטיות ועם כרטיס ברכה מהודר.</p>
        </div>
      </div>

      <div className="text-center pt-4">
        <a
          href="https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%94%D7%96%D7%9E%D7%99%D7%9F%20%D7%96%D7%A8%20%D7%A4%D7%A8%D7%97%D7%99%D7%9D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-rose-500 hover:bg-rose-400 text-white font-bold text-base transition-all shadow-xl shadow-rose-500/20"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>הזמן זר פרחים בוואטסאפ</span>
        </a>
      </div>
    </div>
  );
}

function PokemonRetroContent() {
  return (
    <div className="space-y-6 text-neutral-200">
      <div className="bg-neutral-800/80 p-6 md:p-8 rounded-2xl border border-neutral-700/60">
        <h3 className="text-xl md:text-2xl font-bold text-amber-400 flex items-center gap-2">
          ⚡ קלפי פוקימון, מארזי אספנים ונוסטלגיה
        </h3>
        <p className="mt-3 text-neutral-300 text-base md:text-lg leading-relaxed">
          פינת החלומות לכל מי שגדל על פוקימון וגיימינג: חבילות בוסטר מקוריות (Booster Packs), קופסאות Elite Trainer Boxes,
          קלפי פרומו ופריטי רטרו בלעדיים.
        </p>
      </div>

      <div className="text-center pt-4">
        <a
          href="https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%90%D7%99%D7%9C%D7%95%20%D7%A7%D7%9C%D7%A4%D7%99%20%D7%A4%D7%95%D7%A7%D7%99%D7%9E%D7%95%D7%9F%20%D7%95%D7%9E%D7%90%D7%A8%D7%96%D7%99%D7%9D%20%D7%99%D7%A9%20%D7%9B%D7%A8%D7%92%D7%A2%20%D7%91%D7%97%D7%A0%D7%95%D7%AA%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-base transition-all shadow-xl shadow-amber-500/20"
        >
          <MessageCircle className="w-5 h-5" />
          <span>שאל על מלאי קלפים בוואטסאפ</span>
        </a>
      </div>
    </div>
  );
}

const catalogData = [
  {
    category: "קונספט בלעדי",
    title: "מארז היברידי: עציץ בוטיק + פאנקו פופ תואם",
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    content: <HybridComboContent />,
  },
  {
    category: "תרבות הגיקים",
    title: "בובות פאנקו פופ, אנימה ופריטי מארוול נדירים",
    src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
    content: <FunkoCollectiblesContent />,
  },
  {
    category: "בוטניקה ואומנות",
    title: "עציצי בונסאי מרהיבים, סוקולנטים וצמחי בית",
    src: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1200&auto=format&fit=crop",
    content: <BonsaiPlantsContent />,
  },
  {
    category: "בוטיק שזירה",
    title: "זרי פרחים טריים בעיצוב רענן ומרגש",
    src: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1200&auto=format&fit=crop",
    content: <FreshFlowersContent />,
  },
  {
    category: "אספנות ונוסטלגיה",
    title: "קלפי פוקימון מקוריים ומארזי אספנים",
    src: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=1200&auto=format&fit=crop",
    content: <PokemonRetroContent />,
  },
];
