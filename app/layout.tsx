import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeekBloom - בוטיק פרחים ולייף סטייל",
  description: "חנות בוטיק לפרחים, זרים מעוצבים, צמחים מיוחדים ומתנות",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-[#f8f6f1] text-[#121212]">
        {children}
      </body>
    </html>
  );
}
