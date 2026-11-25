"use client";

import { cn } from "@/lib/utils";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const touchStartYRef = useRef(0);
  const isScrollRef = useRef(false);

  // במובייל כאשר מצב תלת-ממד פעיל, נטה את הכרטיס בזווית 3D דינמית ועוצמתית הנראית לעין בכל אייפון
  useEffect(() => {
    if (!containerRef.current) return;
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      if (isMouseEntered) {
        containerRef.current.style.transform = `rotateY(-12deg) rotateX(8deg) scale(1.02)`;
      } else {
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
      }
    }
  }, [isMouseEntered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = Math.max(-18, Math.min(18, (e.clientX - left - width / 2) / 20));
    const y = Math.max(-18, Math.min(18, (e.clientY - top - height / 2) / 20));
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (_e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = (_e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      touchStartYRef.current = e.touches[0].clientY;
      isScrollRef.current = false;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const dy = Math.abs(e.touches[0].clientY - touchStartYRef.current);
      if (dy > 8) {
        isScrollRef.current = true;
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isScrollRef.current) {
      // הקשה מכוונת מפעילה/מכבה את מצב התלת-ממד וההטיה במובייל
      setIsMouseEntered((prev) => !prev);
    }
    isScrollRef.current = false;
  };

  const handleClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsMouseEntered((prev) => !prev);
    }
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-6 sm:py-10 md:py-20 flex items-center justify-center cursor-pointer",
          containerClassName
        )}
        style={{
          perspective: "1000px",
          WebkitPerspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={cn(
            "flex items-center justify-center relative transition-transform duration-300 ease-out will-change-transform",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-full h-auto [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      const transformVal = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      ref.current.style.transform = transformVal;
      ref.current.style.webkitTransform = transformVal;
    } else {
      const resetVal = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      ref.current.style.transform = resetVal;
      ref.current.style.webkitTransform = resetVal;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition-transform duration-300 ease-out will-change-transform", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
