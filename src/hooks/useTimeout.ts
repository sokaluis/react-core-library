import { useCallback, useEffect, useRef } from "react";

type callbackType = () => void;
type delayType = number;

export const useTimeout = (callback: callbackType, delay: delayType) => {
  const callbackRef = useRef<callbackType>(callback);
  // TODO: change type of timeoutRef as typeof setTimeout
  const timeoutRef = useRef<any>();

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      callbackRef.current();
      console.log("timeoutRef.current", timeoutRef.current);
    }, delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    console.log("useTimeout: effect");
    set();
    return clear();
  }, [set, clear, delay]);

  return {
    reset,
    clear,
  };
};
