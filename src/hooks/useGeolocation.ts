import { useState, useEffect } from "react";

export const useGeolocation = (options?: PositionOptions) => {
  const [loading, setLoading] = useState<boolean>(true);
  // TODO: check if this is the correct type of error
  const [error, setError] = useState<any>();
  const [data, setData] = useState<GeolocationCoordinates | undefined>();

  useEffect(() => {
    const successHandler = (e: GeolocationPosition) => {
      setLoading(false);
      setError(e);
      setData({ ...e.coords });
    };
    const errorHandler = (e: GeolocationPositionError) => {
      setError(e);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    );
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );
    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
};
