import { useState, useEffect } from "react";
import { useEventListener } from "./useEventListener";

export const useMediaQuery = (mediaQuery: string) => {
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList>();

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener("change", (e) => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
};
