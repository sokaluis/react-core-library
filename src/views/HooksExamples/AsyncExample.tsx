import { useAsync } from "hooks";

const AsyncExample = () => {
  const { data, error, loading } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = false;
      setTimeout(() => {
        success ? resolve("Hello World") : reject("Error");
      }, 10000);
    });
  }, []);

  console.log({ data, error, loading });

  return (
    <div>
      <div>Loading {loading.toString()}</div>
      <div>Error: {error}</div>
    </div>
  );
};

export default AsyncExample;
