import { useEffect } from "react";
import { callbackType, delayType } from "typescript";
import { useTimeout } from "./useTimeout";

export const useDebounce = (
  callback: callbackType,
  delay: delayType,
  ...dependencies: any[]
) => {
  const { clear, reset } = useTimeout(callback, delay);

  useEffect(() => {
    reset();
  }, [dependencies, reset]);

  // This useEffect avoid callback to be called at mount
  useEffect(() => {
    clear();
  }, [clear]);
};
