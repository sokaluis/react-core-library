import { useState } from "react";
import { useFetch } from "hooks";

const FetchExample = () => {
  const [id, setId] = useState(1);

  const { data, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  );

  return (
    <>
      <div>{id}</div>
      <button onClick={() => setId((id) => id + 1)}>Increment ID</button>
      <div>Loading: {loading.toString()}</div>
      <div>{loading ? "Loading..." : data?.title}</div>
      <div>{JSON.stringify(error, null, 3)}</div>
      <div>{JSON.stringify(data, null, 3)}</div>
    </>
  );
};

export default FetchExample;
