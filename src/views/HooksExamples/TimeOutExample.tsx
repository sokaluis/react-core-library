import { useState } from "react";
import { useTimeout } from "hooks";

const TimeOutExample = () => {
  const [count, setCount] = useState(10);
  const { clear, reset: setTimeOut } = useTimeout(() => setCount(0), 1000);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={setTimeOut}>Reset Counter</button>
      <button onClick={clear}>Clear TimeOut</button>
    </>
  );
};

export default TimeOutExample;
