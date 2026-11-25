"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconChevronLeft,
  IconChevronRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
  isDraggingRef?: React.MutableRefObject<boolean>;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const isDraggingRef = React.useRef(false);
  const isDownRef = React.useRef(false);
  const startXRef = React.useRef(0);
  const scrollLeftStartRef = React.useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
    }
  }, [initialScroll]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  // גרירה עם עכבר (Mouse Drag to Scroll)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDownRef.current = true;
    isDraggingRef.current = false;
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftStartRef.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDownRef.current = false;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDownRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    if (Math.abs(walk) > 6) {
      isDraggingRef.current = true;
    }
    carouselRef.current.scrollLeft = scrollLeftStartRef.current - walk;
  };

  // גלילה אופקית באמצעות גלגלת העכבר (Wheel to Scroll)
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      carouselRef.current.scrollLeft += e.deltaY * 1.2;
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = window && window.innerWidth < 768 ? 240 : 384;
      const gap = 16;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex, isDraggingRef }}
    >
      <div className="relative w-full group/carousel select-none">
        {/* כפתור חץ שמאלה צף מעל הקרוסלה - מוצג במסכים בינוניים ומעלה כדי לא להסתיר מגע בנייד */}
        <button
          type="button"
          aria-label="גלול שמאלה"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950/80 border border-emerald-500/50 text-emerald-300 shadow-[0_8px_25px_rgba(0,0,0,0.7)] backdrop-blur-md hover:bg-emerald-600 hover:text-white hover:scale-110 active:scale-95 transition-all"
          onClick={scrollLeft}
        >
          <IconChevronLeft className="h-7 w-7" strokeWidth={2.5} />
        </button>

        {/* כפתור חץ ימינה צף מעל הקרוסלה - מוצג במסכים בינוניים ומעלה */}
        <button
          type="button"
          aria-label="גלול ימינה"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950/80 border border-emerald-500/50 text-emerald-300 shadow-[0_8px_25px_rgba(0,0,0,0.7)] backdrop-blur-md hover:bg-emerald-600 hover:text-white hover:scale-110 active:scale-95 transition-all"
          onClick={scrollRight}
        >
          <IconChevronRight className="h-7 w-7" strokeWidth={2.5} />
        </button>

        {/* אזור הגלילה הראשי - תומך גרירה בעכבר, מגע וגלגלת */}
        <div
          dir="ltr"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
          className="flex w-full overflow-x-auto overscroll-x-contain py-6 md:py-12 cursor-grab active:cursor-grabbing touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex flex-row justify-start gap-3 sm:gap-4 md:gap-6 px-4 md:px-16 w-max">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="rounded-3xl shrink-0"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* חיווי ניווט וכפתורי שליטה תחתוניים */}
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between mt-2">
          <div className="text-xs text-neutral-400 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">טיפ: ניתן לגרור עם העכבר, להשתמש בחיצים או לגלול בגלגלת</span>
            <span className="inline sm:hidden">החליקו באצבע לדפדוף בקטלוג 👈</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/80 border border-neutral-700/60 text-neutral-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 transition-all shadow-md"
              onClick={scrollLeft}
              aria-label="גלול אחורה"
            >
              <IconArrowNarrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/80 border border-neutral-700/60 text-neutral-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 transition-all shadow-md"
              onClick={scrollRight}
              aria-label="גלול קדימה"
            >
              <IconArrowNarrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, isDraggingRef } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    // אם המשתמש ביצע גרירה, לא נפתח את המודאל בטעות
    if (isDraggingRef?.current) return;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto" dir="rtl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-neutral-900 border border-neutral-700/80 p-6 md:p-10 font-sans shadow-2xl"
            >
              <button
                type="button"
                className="sticky top-4 left-0 mr-auto flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 border border-neutral-700 text-white hover:bg-neutral-700 transition"
                onClick={handleClose}
              >
                <IconX className="h-5 w-5 text-neutral-200" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-sm md:text-base font-semibold text-emerald-400 mt-2"
              >
                {card.category}
              </motion.p>
              <motion.h3
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-2 text-2xl md:text-4xl font-extrabold text-white"
              >
                {card.title}
              </motion.h3>
              <div className="py-6">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        dir="rtl"
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.97 }}
        className="relative z-10 flex h-72 w-56 sm:h-80 sm:w-64 md:h-[32rem] md:w-96 flex-col items-start justify-start overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl group text-right"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/80 via-black/20 to-black/70" />
        <div className="relative z-40 p-6 md:p-8 flex flex-col items-start text-right w-full">
          <motion.span
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-xs md:text-sm font-bold text-emerald-400 uppercase tracking-wider"
          >
            {card.category}
          </motion.span>
          <motion.h4
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 text-lg md:text-2xl font-bold text-white text-right leading-snug drop-shadow"
          >
            {card.title}
          </motion.h4>
        </div>

        <div className="absolute bottom-4 right-4 z-40">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
            <span>לחצו לפרטים</span>
            <span>←</span>
          </span>
        </div>

        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill: _fill,
  blurDataURL: _blurDataURL,
  ...rest
}: any) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
