import Brusha from "@/components/ui/brusha-illustration-studio-hero";
import LiquidGlassDemo from "@/components/liquid-glass-demo";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Brusha
        brand="GeekBloom"
        copy={{
          headline: ["בוטיק פרחים", "ולייף סטייל"],
          description: [
            "שזירת פרחים אומנותית, זרים ייחודיים לאירועים,",
            "עציצים מעוצבים ומתנות עם ניחוח מיוחד לכל רגע משמח."
          ],
          navCta: { label: "להזמנות בוואטסאפ", href: "#contact" },
          primaryCta: { label: "לצפייה בקולקציה", href: "#catalog" },
          secondaryCta: { label: "הסיפור שלנו", href: "#about" }
        }}
        navLinks={[
          { label: "קולקציית זרים", href: "#bouquets" },
          { label: "צמחים ועציצים", href: "#plants" },
          { label: "מארזים מיוחדים", href: "#gifts" },
          { label: "אודות", href: "#about" },
          { label: "צור קשר", href: "#contact" }
        ]}
      />

      {/* תצוגת הקומפוננטה Liquid Glass */}
      <section className="w-full">
        <LiquidGlassDemo />
      </section>
    </main>
  );
}
