import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type ElementRect = {
  left: number;
  top: number;
  width: number;
  height: number;
  fontSize: number;
};

type HeroScrollContextValue = {
  progress: number;
  isDocked: boolean;
  startRects: { name: ElementRect; title: ElementRect } | null;
};

const HeroScrollContext = createContext<HeroScrollContextValue>({
  progress: 0,
  isDocked: false,
  startRects: null,
});

export const useHeroScroll = () => useContext(HeroScrollContext);

const captureRect = (el: HTMLElement): ElementRect => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    fontSize: parseFloat(getComputedStyle(el).fontSize),
  };
};

export const HeroScrollProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState(0);
  const [startRects, setStartRects] = useState<{
    name: ElementRect;
    title: ElementRect;
  } | null>(null);
  const initialTriggerTop = useRef<number | null>(null);
  const startRectsCaptured = useRef(false);

  const updateProgress = useCallback(() => {
    const trigger = document.getElementById("hero-social-trigger");
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();

    if (window.scrollY === 0 || initialTriggerTop.current === null) {
      initialTriggerTop.current = rect.top;
    }

    const movedUp = initialTriggerTop.current - rect.top;
    const morphRange = window.innerHeight * 0.45;

    let newProgress = 0;
    if (movedUp <= 0) {
      newProgress = 0;
    } else if (movedUp >= morphRange) {
      newProgress = 1;
    } else {
      newProgress = movedUp / morphRange;
    }

    if (newProgress > 0.02 && !startRectsCaptured.current) {
      const nameEl = document.getElementById("hero-name");
      const titleEl = document.getElementById("hero-title");
      if (nameEl && titleEl) {
        setStartRects({
          name: captureRect(nameEl),
          title: captureRect(titleEl),
        });
        startRectsCaptured.current = true;
      }
    }

    if (newProgress === 0) {
      startRectsCaptured.current = false;
      setStartRects(null);
    }

    setProgress(newProgress);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(updateProgress);
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  return (
    <HeroScrollContext.Provider
      value={{ progress, isDocked: progress >= 0.98, startRects }}
    >
      {children}
    </HeroScrollContext.Provider>
  );
};
