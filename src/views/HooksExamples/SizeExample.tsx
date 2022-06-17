import { useRef } from "react";
import { useSize } from "hooks";

const SizeExample = () => {
  const ref = useRef<any>();
  const size = useSize(ref);

  return (
    <>
      <div>{JSON.stringify(size, null, 3)}</div>
      <textarea ref={ref}></textarea>
    </>
  );
};

export default SizeExample;
