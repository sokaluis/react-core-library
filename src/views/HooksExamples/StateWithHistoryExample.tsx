import { useState } from "react";
import { useStateWithHistory } from "hooks";

const StateWithHistoryExample = () => {
  const [
    count,
    setCount,
    history,
    pointer,
    { clearHistory, goBack, goForward, goTo },
  ] = useStateWithHistory(1);
  const [name, setName] = useState("Luis");

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>History: {history.join(", ")}</h1>
      <h1>Pointer: {pointer}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCount((count: number) => count + 2)}>
        Double
      </button>
      <button onClick={() => setCount((count: number) => count + 1)}>
        Increment
      </button>
      <button onClick={goBack}>Undo</button>
      <button onClick={goForward}>Forward</button>
      <button onClick={() => goTo(2)}>Go to Index 2</button>
      <button onClick={() => setName("Azocar")}>Change name</button>
      <button onClick={clearHistory}>Clear History</button>
    </>
  );
};

export default StateWithHistoryExample;
