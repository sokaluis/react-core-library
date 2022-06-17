import { useEffect, useState } from "react";

export const useOnScreen = (ref: any, rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (element == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(element);
    return () => {
      if (element == null) return;
      observer.unobserve(element);
    };
  }, [ref, rootMargin]);

  return isVisible;
};
