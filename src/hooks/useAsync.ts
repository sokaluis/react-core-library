import { useCallback, useEffect, useState } from "react";

//TODO: Fix re-renders when the promise is resolved
export const useAsync = <T>(
  callback: () => Promise<T>,
  ...dependencies: any[]
) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState<T | undefined>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setData(undefined);
    callback()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies]);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return {
    loading,
    error,
    data,
  };
};
