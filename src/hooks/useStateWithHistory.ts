import { useCallback, useRef, useState } from "react";

// type setFunction = <T>(v: T) => T | T;

type useStateWithHistoryReturn<T> = [
  value: T,
  setValue: any,
  history: T[],
  pointer: number,
  historyHandlers: {
    goBack: () => void;
    goForward: () => void;
    goTo: (index: number) => void;
    clearHistory: () => void;
  }
];

export const useStateWithHistory = <T>(
  defaultValue: T,
  capacity: number = 10
): useStateWithHistoryReturn<T> => {
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback(
    // TODO: type v as callback or value
    (v: any) => {
      // set the callback function that we send to the setter
      const resolveValue = typeof v === "function" ? v(value) : v;
      // Check if the value is the same as the current value
      if (historyRef.current[pointerRef.current] !== resolveValue) {
        // If we go back to the history, and set a new value, we need to remove the old values from the history
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1);
        }
        // If it is not, push the new value to the history
        historyRef.current.push(resolveValue);

        // If the history is longer than the capacity, remove the first value
        while (historyRef.current.length > capacity) {
          historyRef.current.shift();
        }
        // Set the pointer to the last value
        pointerRef.current = historyRef.current.length - 1;
      }
      setValue(resolveValue);
    },
    [value, capacity]
  );

  const goBack = useCallback(() => {
    // If the pointer is at the first value, do nothing
    if (pointerRef.current <= 0) return;
    // Set the pointer to the previous pointer
    pointerRef.current--;
    // Set the value to the previous value
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const goForward = useCallback(() => {
    // If the pointer is at the last value, do nothing
    if (pointerRef.current >= historyRef.current.length - 1) return;
    // Set the pointer to the next pointer
    pointerRef.current++;
    // Set the value to the next value
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const goTo = useCallback((index: number) => {
    // If the index is out of bounds, do nothing
    if (index < 0 || index >= historyRef.current.length) return;
    // Set the pointer to the index
    pointerRef.current = index;
    // Set the value to the index value
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const clearHistory = useCallback(() => {
    historyRef.current = [defaultValue];
    pointerRef.current = 0;
    setValue(defaultValue);
  }, [defaultValue]);

  return [
    value,
    set,
    historyRef.current,
    pointerRef.current,
    {
      goBack,
      goForward,
      goTo,
      clearHistory,
    },
  ];
};
