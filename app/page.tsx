import Brusha from "@/components/ui/brusha-illustration-studio-hero";
import LiquidGlassDemo from "@/components/liquid-glass-demo";
import ThreeDCardDemo from "@/components/3d-card-demo";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-neutral-950 text-white">
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

      {/* תצוגת הקומפוננטה 3D Card */}
      <section className="w-full py-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-neutral-200">כרטיס 3D אינטראקטיבי (3D Card)</h2>
        <ThreeDCardDemo />
      </section>

      {/* תצוגת הקומפוננטה Liquid Glass */}
      <section className="w-full">
        <LiquidGlassDemo />
      </section>
    </main>
  );
}
