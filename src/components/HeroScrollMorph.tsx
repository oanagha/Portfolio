import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useHeroScroll, type ElementRect } from "@/context/HeroScrollContext";

type MorphPos = { x: number; y: number; fontSize: number };

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const rectCenterY = (r: ElementRect) => r.top + r.height / 2;
const rectCenterX = (r: ElementRect) => r.left + r.width / 2;

const HEADER_NAME_FONT_SIZE = 30; // text-3xl
const HEADER_TITLE_FONT_SIZE = 20; // text-xl

const HeroScrollMorph = () => {
  const { progress, isDocked, startRects } = useHeroScroll();
  const nameTargetRef = useRef<HTMLSpanElement>(null);
  const titleTargetRef = useRef<HTMLSpanElement>(null);
  const [namePos, setNamePos] = useState<MorphPos | null>(null);
  const [titlePos, setTitlePos] = useState<MorphPos | null>(null);

  const measure = useCallback(() => {
    if (!startRects || !nameTargetRef.current || !titleTargetRef.current) return;

    const nameEnd = captureTargetRect(nameTargetRef.current);
    const titleEnd = captureTargetRect(titleTargetRef.current);
    const t = progress;

    setNamePos({
      x: lerp(startRects.name.left, nameEnd.left, t),
      y: lerp(rectCenterY(startRects.name), rectCenterY(nameEnd), t),
      fontSize: lerp(startRects.name.fontSize, nameEnd.fontSize, t),
    });

    setTitlePos({
      x: lerp(rectCenterX(startRects.title), rectCenterX(titleEnd), t),
      y: lerp(rectCenterY(startRects.title), rectCenterY(titleEnd), t),
      fontSize: lerp(startRects.title.fontSize, titleEnd.fontSize, t),
    });
  }, [progress, startRects]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const showMorph = progress > 0.02 && !isDocked && startRects;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 py-4",
          "backdrop-blur-md border-b border-border/40",
          "transition-[background-color,box-shadow] duration-300",
          isDocked ? "bg-background/90 shadow-card" : "bg-background/0 border-transparent"
        )}
        style={{
          opacity: isDocked ? 1 : Math.min(1, progress * 1.5),
          pointerEvents: isDocked ? "auto" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span
            ref={nameTargetRef}
            className={cn(
              "text-4xl font-bold gradient-text font-['Poppins',sans-serif]",
              !isDocked && "invisible"
            )}
            aria-hidden={!isDocked}
          >
            ANAGHA O
          </span>
          <span
            ref={titleTargetRef}
            className={cn(
              "text-2xl font-medium tracking-[0.2em] text-muted-foreground uppercase font-['Poppins',sans-serif]",
              !isDocked && "invisible"
            )}
            aria-hidden={!isDocked}
          >
            SOFTWARE ENGINEER
          </span>
        </div>
      </header>

      {showMorph && namePos && (
        <span
          className="fixed z-[60] font-bold gradient-text whitespace-nowrap pointer-events-none"
          style={{
            left: namePos.x,
            top: namePos.y,
            fontSize: namePos.fontSize,
            lineHeight: 1,
            transform: "translateY(-50%)",
          }}
          aria-hidden
        >
          Anagha O
        </span>
      )}

      {showMorph && titlePos && (
        <span
          className="fixed z-[60] font-medium tracking-[0.2em] text-muted-foreground uppercase whitespace-nowrap pointer-events-none"
          style={{
            left: titlePos.x,
            top: titlePos.y,
            fontSize: titlePos.fontSize,
            lineHeight: 1,
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden
        >
          SOFTWARE ENGINEER
        </span>
      )}
    </>
  );
};

const captureTargetRect = (el: HTMLElement): ElementRect => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    fontSize: parseFloat(getComputedStyle(el).fontSize),
  };
};

export default HeroScrollMorph;
