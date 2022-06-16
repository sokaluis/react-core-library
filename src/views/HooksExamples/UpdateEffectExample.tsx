import { useState } from "react";
import { useUpdateEffect } from "hooks";

const UpdateEffectExample = () => {
  const [count, setCount] = useState(0);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
};

export default UpdateEffectExample;
