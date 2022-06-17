import { useLayoutEffect } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { useLocalStorage } from "./useStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode", "");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;

  useLayoutEffect(() => {
    document.body.classList.toggle("dark-mode", !!enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
};
