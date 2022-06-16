import { useArray } from "hooks";

const ArrayExample = () => {
  const { array, set, remove, clear, filter, push, update } = useArray([
    2, 3, 4, 5,
  ]);

  return (
    <>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change second element to 9</button>
      <button onClick={() => remove(1)}>Remove second element</button>
      <button onClick={() => filter((n) => n < 3)}>
        Keep numbers less than 4
      </button>
      <button onClick={() => set([1, 2])}> Set to 1, 2</button>
      <button onClick={clear}>Clear</button>
    </>
  );
};

export default ArrayExample;
