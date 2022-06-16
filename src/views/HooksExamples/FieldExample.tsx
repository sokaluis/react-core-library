import { useField } from "hooks";

const FieldExample = () => {
  const email = useField({ type: "email" });
  const password = useField({ type: "password" });

  return (
    <form>
      <label>Email</label>
      <input {...email} />
      <label>Password</label>
      <input {...password} />
      <button type="submit">Login</button>
    </form>
  );
};

export default FieldExample;
