import Brusha from "@/components/ui/brusha-illustration-studio-hero";
import { TrustBar, GoogleReviewsSection } from "@/components/trust-and-reviews";
import { DualUniverseSection } from "@/components/dual-universe-section";
import { GeekBloomCarousel } from "@/components/geekbloom-carousel";
import { StoreLocationSection, Footer } from "@/components/store-location";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import LiquidGlassDemo from "@/components/liquid-glass-demo";
import FocusCardsDemo from "@/components/focus-cards-demo";
import AuroraBackgroundDemo from "@/components/aurora-background-demo";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#0c0f12] text-[#f1f5f9]">
      {/* 1. Hero מאויר ומרשים עם Brusha */}
      <Brusha
        brand="Geek&Bloom"
        copy={{
          headline: ["הטבע פוגש את", "תרבות הגיקים"],
          description: [
            "זרי פרחים, עציצי בונסאי וסוקולנטים לצד בובות אספנות Funko Pop,",
            "פריטי אנימה, דרגון בול, מארוול וגיימינג • סוקולוב 66, הרצליה"
          ],
          navCta: {
            label: "וואטסאפ: 054-4998997",
            href: "https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%A9%D7%9C%20Geek%26Bloom"
          },
          primaryCta: { label: "לצפייה בקולקציה", href: "#catalog" },
          secondaryCta: { label: "איך מגיעים? (סוקולוב 66)", href: "#contact" }
        }}
        navLinks={[
          { label: "הקולקציות", href: "#catalog" },
          { label: "שני העולמות", href: "#dual-universe" },
          { label: "ביקורות גוגל (77)", href: "#reviews" },
          { label: "שעות והגעה", href: "#contact" }
        ]}
      />

      {/* 2. סטטיסטיקות ואמינות (Trust Bar) */}
      <TrustBar />

      {/* 3. שני העולמות עם כרטיסי תלת-ממד (3D Cards) */}
      <DualUniverseSection />

      {/* 4. קרוסלת כרטיסי Apple עם מודאלים לקטלוג */}
      <GeekBloomCarousel />

      {/* 5. כרטיסי מיקוד אינטראקטיביים (Focus Cards) */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            גלריית כרטיסי מיקוד (Focus Cards)
          </h3>
          <p className="text-neutral-400 text-sm mt-2">
            רחפו מעל כרטיס כדי למקד אותו ולטשטש בעדינות את שאר הכרטיסים
          </p>
        </div>
        <FocusCardsDemo />
      </section>

      {/* 6. קיר הביקורות המאומתות מגוגל */}
      <GoogleReviewsSection />

      {/* 6. פיצ'ר אינטראקטיבי: Liquid Glass Refraction */}
      <section className="w-full py-16 bg-neutral-950 border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <span>טכנולוגיית זכוכית נוזלית אינטראקטיבית</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            גררו את עדשת הזכוכית (Liquid Glass) כדי לראות את שבירת האור
          </h3>
          <p className="text-neutral-400 text-sm mt-2">
            אלמנט עיצובי שמדגיש את הסטנדרט החדשני של Geek&Bloom
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
            <LiquidGlassDemo />
          </div>
        </div>
      </section>

      {/* 7. כתובת, מפה, שעות פתיחה ויצירת קשר (כולל רקע Fluted Glass Waves) */}
      <StoreLocationSection />

      {/* 8. אפקט אורות הצפון: Aurora Background */}
      <section className="w-full border-t border-neutral-800">
        <AuroraBackgroundDemo />
      </section>

      {/* 9. פוטר */}
      <Footer />

      {/* 9. כפתור וואטסאפ צף קבוע */}
      <StickyWhatsApp />
    </main>
  );
}
