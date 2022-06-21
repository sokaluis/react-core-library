import { useCallback, useEffect, useState } from "react";
import { callbackType } from "typescript";

type UseStorageReturn<T> = [T | undefined, (value: T) => void, callbackType];

export const useLocalStorage = <T>(key: string, defaultValue?: T) => {
  return useStorage(key, defaultValue, window.localStorage);
};

export const useSessionStorage = <T>(key: string, defaultValue?: T) => {
  return useStorage(key, defaultValue, window.sessionStorage);
};

const useStorage = <T>(
  key: string,
  defaultValue: T,
  storageObject: Storage
  //TODO: try to type this return useStorageReturn
): UseStorageReturn<T> => {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [value, key, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
};
