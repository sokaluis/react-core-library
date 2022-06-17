import { useEventListener } from "hooks";
import { useState } from "react";

const EventListenerExample = () => {
  const [key, setKey] = useState("");
  // TODO: add type annotation of e in useEventListener, meanwhile pass eventType here
  useEventListener("keydown", (e: KeyboardEvent) => {
    setKey(e.key);
  });

  return <div>Last Key: {key}</div>;
};

export default EventListenerExample;
