import { useEffect, useRef } from "react";

export const useEventListener = (
  eventType: keyof WindowEventMap,
  callback: (element: any) => void,
  element = window
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (element: any) => callbackRef.current(element);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};
