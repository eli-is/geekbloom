import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "שזירת זרי בוטיק טריים ע״י אביב",
      src: "/images/aviv-bouquet.jpg",
    },
    {
      title: "מארז היברידי: פרחים, פאנקו ופוקימון",
      src: "/images/hybrid-combo-hero.jpg",
    },
    {
      title: "עציצי בונסאי ועצי חוט ונחושת",
      src: "/images/bonsai-and-gifts.jpg",
    },
    {
      title: "מדפי פיגורים מקוריים לצד סוקולנטים",
      src: "/images/figures-and-succulents.jpg",
    },
    {
      title: "חנות הקונספט • סוקולוב 66 הרצליה",
      src: "/images/storefront-aviv.jpg",
    },
    {
      title: "מועדון Club 5 והנחת כוחות הביטחון",
      src: "/images/club5-vip.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
