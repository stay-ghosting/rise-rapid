import { useCallback, useEffect, useRef, useState } from "react";

const useInView = <T extends HTMLElement>(thresholdRem = 10) => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenViewed, setHasBeenViewed] = useState(false);
  const [rootFontSize, setRootFontSize] = useState<number>(16);
  const ref = useRef<T | null>(null);

  const thresholdPx = thresholdRem * rootFontSize;

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isVisible = hasBeenViewed 
        ? rect.top <= windowHeight 
        : rect.top <= windowHeight - thresholdPx;

      setHasBeenViewed(isVisible);
      setIsInView(isVisible);
    }
  }, [hasBeenViewed, thresholdPx]);

  useEffect(() => {
    const rootElement = document.documentElement;
    const handleResize = () => {
      setRootFontSize(parseFloat(getComputedStyle(rootElement).fontSize));
    };

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(rootElement);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return [ref, isInView] as const;
};

export default useInView;
