import { useState } from "react";
import { useDebounce } from "hooks";

const DebounceExample = () => {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
};

export default DebounceExample;
