import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8">
      <HoverEffect items={benefits} />
    </div>
  );
}

export const benefits = [
  {
    title: "מועדון הלקוחות Club 5 🎁",
    description:
      "5% הנחה קבועה לכל החיים החל מהקנייה הראשונה! ללא ספאם ובהצטרפות פשוטה ישירות בחנות.",
    link: "https://spotobuy.com/store/6acb88a05b74df2bc27b1379/b08d4839-ccab-4420-b5ab-897db00a8b69",
  },
  {
    title: "10% הנחה לכוחות הביטחון ומילואים 🇮🇱",
    description:
      "מצדיעים ללוחמים ולמשרתי המילואים! 10% הנחה בכל קנייה בהצגת חוגר פעיל או הגעה במדים.",
    link: "https://wa.me/972544998997?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%91%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A9%D7%A8%D7%AA%20%D7%9E%D7%99%D7%9C%D7%95%D7%90%D7%99%D7%9D%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%96%D7%9E%D7%99%D7%9F",
  },
  {
    title: "חנות האונליין ב-SpotOBuy 🛍️",
    description:
      "הזמנה ישירה וקלה של כל המוצרים, הפרחים והעציצים עם משלוח מהיר עד פתח הדלת בהרצליה והסביבה.",
    link: "https://spotobuy.com/store/6acb88a05b74df2bc27b1379/b08d4839-ccab-4420-b5ab-897db00a8b69",
  },
  {
    title: "ההדרכה והליווי של אביב 🌱",
    description:
      "קניתם בונסאי או צמח? אתם בידיים בטוחות. אביב זמין לכם בוואטסאפ לכל שאלה, בדיקת תמונה וטיפול נכון.",
    link: "https://wa.me/972544998997",
  },
  {
    title: "בובות פאנקו נדירות & אנימה ⚡",
    description:
      "מבחר נדיר של Funko Pop (מהדורות Chase ו-Exclusives), דמויות דרגון בול, מארוול, קלפי פוקימון ופריטי אספנות מקוריים.",
    link: "#catalog",
  },
  {
    title: "שזירת בוטיק טרייה 🌸",
    description:
      "זרי פרחים טריים הנשזרים מדי יום באהבה ומקצועיות, עם התאמה אישית לכל אירוע, חג ושבת.",
    link: "#contact",
  },
];
