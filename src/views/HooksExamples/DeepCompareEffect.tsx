import { useEffect, useState, useRef, useMemo } from "react";
import { useDeepCompareEffect } from "hooks";

const DeepCompareEffectComponent = () => {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const useEffectCountRef = useRef<any>({
    textContent: 0,
  });
  const useDeepCompareEffectCountRef = useRef<any>();

  const person = useMemo(() => {
    return {
      name: "John",
      age,
    };
  }, [age]);
  // const person = { name: "John", age };

  console.log("person", person);

  useEffect(() => {
    if (!useEffectCountRef) return;
    useEffectCountRef.current.textContent =
      parseInt(useEffectCountRef.current.textContent) + 1;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [person]);

  useDeepCompareEffect(() => {
    if (!useEffectCountRef) return;
    useDeepCompareEffectCountRef.current.textContent =
      parseInt(useDeepCompareEffectCountRef.current.textContent) + 1;
  }, [person]);

  return (
    <div>
      <div>
        useEffect: <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
      </div>
      <div>Other Count: {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>
        Increment Age
      </button>
      <button onClick={() => setOtherCount((count) => count + 1)}>
        Increment Other Count
      </button>
    </div>
  );
};

export default DeepCompareEffectComponent;
