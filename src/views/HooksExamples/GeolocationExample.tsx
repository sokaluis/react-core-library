import { useGeolocation } from "hooks";

const GeolocationExample = () => {
  const { loading, error, data } = useGeolocation();

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        {data?.latitude} x {data?.longitude}
      </div>
    </>
  );
};

export default GeolocationExample;
