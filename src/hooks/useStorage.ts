import { useCallback, useEffect, useState } from "react";

// type useStorageReturn<T> = [T | undefined, (value: any) => void, () => void];

export const useLocalStorage = <T>(key: string, defaultValue?: T) => {
  return useStorage(key, defaultValue, window.localStorage);
};

export const useSessionStorage = <T>(key: string, defaultValue?: T) => {
  return useStorage(key, defaultValue, window.sessionStorage);
};

const useStorage = (
  key: string,
  defaultValue: any,
  storageObject: Storage
  //TODO: try to type this return useStorageReturn
): any => {
  const [value, setValue] = useState<any>(() => {
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
