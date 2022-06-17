import { useEffectOnce } from "hooks";
import { useState } from "react";

export default function EffectOnceComponent() {
  const [count, setCount] = useState(0);

  useEffectOnce(() => alert("Hi"));

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
}
