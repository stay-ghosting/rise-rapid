import { useEffect, useRef, useState } from "react";

const useInView = <T extends HTMLElement>(threshold = 100) => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenViewdView, setHasBeenViewdView] = useState(false);
  const ref = useRef<T | null>(null);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isVisible = hasBeenViewdView ? rect.top <= windowHeight : rect.top <= windowHeight - threshold;

      setHasBeenViewdView(isVisible)
      setIsInView(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return [ref, isInView] as const;
};

export default useInView;
