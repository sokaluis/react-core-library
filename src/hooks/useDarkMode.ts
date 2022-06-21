import { useLayoutEffect } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { useLocalStorage } from "./useStorage";

type UseDarkModeReturn = [boolean, Function];

export const useDarkMode = (): UseDarkModeReturn => {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode", false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;

  useLayoutEffect(() => {
    document.body.classList.toggle("dark-mode", !!enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
};
