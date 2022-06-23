import { getNestedTranslation } from "helpers/hooks.helpers";
import { translationType } from "typescript";
import { useLocalStorage } from "./useStorage";

export const useTranslation = () => {
  const lan: translationType = "en";
  const [language, setLanguage] = useLocalStorage<translationType>(
    "language",
    "en"
  );
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    lan
  );

  const translate = (key: translationType) => {
    if (!key) return;
    const keys = key.split(".");

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
};
