import { useState } from "react";
import { usePrevious } from "hooks";

const PreviousExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Kyle");
  const previousCount = usePrevious(count);
  const previousName = usePrevious(name);

  return (
    <>
      <h1>Previous State</h1>
      <p>Current State: {count}</p>
      <p>Previous State: {previousCount}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <h1>Previous Name</h1>
      <p>Current Name: {name}</p>
      <p>Previous Name: {previousName}</p>
      <button onClick={() => setName("John")}>Change name</button>
    </>
  );
};

export default PreviousExample;
