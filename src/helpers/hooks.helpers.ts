import * as translations from "translations";
import { translationType } from "typescript";

export const getNestedTranslation = (
  language: keyof translationType,
  keys: string[]
) => {
  if (!language) return;
  return keys.reduce(
    (obj, key: keyof typeof obj) => obj?.[key],
    translations[language]
  );
};
