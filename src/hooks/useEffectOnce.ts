import { useCallback, useEffect } from "react";
import { callbackType } from "typescript";

// Good idea, but not implemented yet
export const useEffectOnce = (callback: callbackType) => {
  const handleCallback = useCallback(callback, [callback]);
  useEffect(handleCallback, [handleCallback]);
};
