import { useState, useCallback } from "react";
import Cookies from "js-cookie";
import { callbackType } from "typescript";

type UseCookieReturnType = [
  string,
  (value: string, options?: Cookies.CookieAttributes) => void,
  callbackType
];

export const useCookie = (
  name: string,
  defaultValue: string
): UseCookieReturnType => {
  const [value, setValue] = useState<string>(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  const updateCookie = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue("");
  }, [name]);

  return [value, updateCookie, deleteCookie];
};
