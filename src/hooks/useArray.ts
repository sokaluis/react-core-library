import { useState } from "react";

// TODO: improve the generic type logic or define which type the hook will use
export const useArray = <T>(defaultValue: T[]) => {
  const [array, setArray] = useState<T[]>(defaultValue);

  // copy array and add new item
  const push = (value: T) => {
    setArray((a) => [...a, value]);
  };

  // copy array and filter out item
  const filter = (callback: (value: T) => boolean) => {
    setArray((a) => a.filter(callback));
  };

  const update = (index: number, newElement: T) => {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  };

  const remove = (index: number) => {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]);
  };

  const clear = () => {
    setArray([]);
  };

  return {
    array,
    set: setArray,
    push,
    filter,
    update,
    remove,
    clear,
  };
};
