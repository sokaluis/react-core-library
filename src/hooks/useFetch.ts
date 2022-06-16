import { useAsync } from "./useAsync";

type optionsType = {
  headers?: { [key: string]: string };
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  credentials?: "include" | "omit";
  cache?: "default" | "no-store" | "reload" | "no-cache";
  redirect?: "follow" | "error" | "manual";
  referrerPolicy?: "no-referrer" | "origin" | "unsafe-url";
  integrity?: string;
  keepalive?: boolean;
  signal?: AbortSignal;
  mode?: "cors" | "no-cors" | "same-origin";
  referrer?: string;
};

const DEFAULT_OPTIONS: optionsType = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const useFetch = (
  url: string,
  options: optionsType,
  ...dependencies: any[]
) => {
  //TODO: Fix re-renders when the promise is resolved
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((response) => {
      if (response.ok) return response.json();
      return response.json().then((json) => Promise.reject(json));
    });
  }, [dependencies]);
};
