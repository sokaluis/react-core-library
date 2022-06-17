import { useEffect, useRef } from "react";
import isEqual from "lodash/fp/isEqual";

export const useDeepCompareEffect = (
  callback: () => void,
  ...dependencies: any[]
) => {
  // TODO: type dependencies correctly
  const currentDependenciesRef = useRef<any[]>();

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, [currentDependenciesRef.current]);
};
