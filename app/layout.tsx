import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geek&Bloom | המקום שבו הטבע פוגש את תרבות הגיקים | הרצליה",
  description:
    "חנות קונספט ייחודית בסוקולוב 66 הרצליה: זרי פרחים, עציצי בונסאי, סוקולנטים וצמחי בית לצד בובות אספנות Funko Pop, פריטי אנימה, דרגון בול, מארוול, גיימינג ומתנות מקוריות. שירות אישי ומשלוחים.",
  keywords: [
    "GeekBloom",
    "חנות פרחים הרצליה",
    "בונסאי",
    "פאנקו פופ",
    "Funko Pop",
    "דרגון בול",
    "מארוול",
    "צמחי בית",
    "מתנות לגברים",
    "מתנות לגיקים",
    "סוקולוב 66",
  ],
  authors: [{ name: "Aviv - Geek&Bloom" }],
  openGraph: {
    title: "Geek&Bloom | Where Nature Meets Geek Culture",
    description: "זרי פרחים, צמחים מיוחדים ופריטי אספנות וגיימינג תחת קורת גג אחת ברחוב סוקולוב 66, הרצליה.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col font-sans bg-[#0c0f12] text-[#f1f5f9] selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
