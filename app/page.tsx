import Brusha from "@/components/ui/brusha-illustration-studio-hero";
import { GeekBloomLogo } from "@/components/geekbloom-logo";
import { TrustBar, GoogleReviewsSection } from "@/components/trust-and-reviews";
import { DualUniverseSection } from "@/components/dual-universe-section";
import { GeekBloomCarousel } from "@/components/geekbloom-carousel";
import { StoreLocationSection, Footer } from "@/components/store-location";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import LiquidGlassDemo from "@/components/liquid-glass-demo";
import FocusCardsDemo from "@/components/focus-cards-demo";
import AuroraBackgroundDemo from "@/components/aurora-background-demo";
import CardHoverEffectDemo from "@/components/card-hover-effect-demo";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#0c0f12] text-[#f1f5f9]">
      {/* 1. Hero מאויר ומרשים עם Brusha ולוגו רשמי מוזהב */}
      <Brusha
        brand="Geek&Bloom"
        customLogo={<GeekBloomLogo size="md" />}
        copy={{
          headline: ["הטבע פוגש את", "תרבות הגיקים"],
          description: [
            "זרי פרחים, עציצי בונסאי וסוקולנטים לצד בובות אספנות Funko Pop,",
            "פריטי אנימה, דרגון בול, מארוול וגיימינג • סוקולוב 66, הרצליה"
          ],
          navCta: {
            label: "חנות אונליין (SpotOBuy)",
            href: "https://spotobuy.com/store/6acb88a05b74df2bc27b1379/b08d4839-ccab-4420-b5ab-897db00a8b69"
          },
          primaryCta: { label: "לצפייה בקולקציה", href: "#catalog" },
          secondaryCta: { label: "איך מגיעים? (סוקולוב 66)", href: "#contact" }
        }}
        navLinks={[
          { label: "חנות אונליין", href: "https://spotobuy.com/store/6acb88a05b74df2bc27b1379/b08d4839-ccab-4420-b5ab-897db00a8b69" },
          { label: "הקולקציות", href: "#catalog" },
          { label: "שני העולמות", href: "#dual-universe" },
          { label: "מועדון Club 5", href: "#benefits" },
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

      {/* 5. כרטיסי מיקוד אינטראקטיביים (Focus Cards) עם תמונות אמיתיות */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
            הצצה מתוך החנות בסוקולוב 66
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            גלריית הרגעים והמוצרים של Geek&Bloom
          </h3>
          <p className="text-neutral-400 text-sm mt-2">
            רחפו מעל תמונה כדי להתמקד בה ולראות את הזווית הייחודית של החנות
          </p>
        </div>
        <FocusCardsDemo />
      </section>

      {/* 6. קיר הביקורות המאומתות מגוגל */}
      <GoogleReviewsSection />

      {/* 7. פיצ'ר אינטראקטיבי: Liquid Glass מעל התמונה האמיתית של המארז */}
      <section className="w-full py-16 bg-neutral-950 border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <span>חוויה אינטראקטיבית</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            עדשת הזכוכית הנוזלית (Liquid Glass)
          </h3>
          <p className="text-neutral-400 text-sm mt-2">
            גררו את העדשה מעל המארז ההיברידי כדי לראות את שבירת האור והמיקוד
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
            <LiquidGlassDemo />
          </div>
        </div>
      </section>

      {/* 8. כתובת, מפה, שעות פתיחה ויצירת קשר (כולל רקע Fluted Glass Waves) */}
      <StoreLocationSection />

      {/* 9. הסיפור האישי של אביב על רקע Aurora Background */}
      <section className="w-full border-t border-neutral-800">
        <AuroraBackgroundDemo />
      </section>

      {/* 10. הטבות מועדון הלקוחות ושירות (Card Hover Effect) */}
      <section id="benefits" className="w-full py-16 bg-neutral-900/60 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
            הערך המוסף שלנו
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            מועדון הלקוחות Club 5, הטבות ושירות אישי
          </h3>
          <p className="text-neutral-400 text-sm mt-2">
            גלו את ההטבות הבלעדיות של Geek&Bloom והצטרפו לקהילה שלנו
          </p>
        </div>
        <CardHoverEffectDemo />
      </section>

      {/* 11. פוטר */}
      <Footer />

      {/* 9. כפתור וואטסאפ צף קבוע */}
      <StickyWhatsApp />
    </main>
  );
}
