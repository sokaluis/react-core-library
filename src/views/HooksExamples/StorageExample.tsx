import { useLocalStorage, useSessionStorage } from "hooks";

const StorageExample = () => {
  const [name, setName, clearName] = useLocalStorage("name", "Kyle");
  const [age, setAge, removeAge] = useSessionStorage("name", 28);

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("Kyle")}>Set Name</button>
      <button onClick={() => setAge(30)}>Set Age</button>
      <button onClick={() => clearName()}>Clear Name</button>
      <button onClick={() => removeAge()}>Remove Age</button>
    </div>
  );
};

export default StorageExample;
