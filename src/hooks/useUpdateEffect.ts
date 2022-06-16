import { useEffect, useRef } from "react";
import { callbackType } from "typescript";

export const useUpdateEffect = (
  callback: callbackType,
  ...dependencies: any[]
) => {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    return callback();
  }, [dependencies, callback]);
};
