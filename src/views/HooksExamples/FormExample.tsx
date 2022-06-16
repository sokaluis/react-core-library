import { useForm } from "hooks";

const FormExample = () => {
  const { email, password, onChange } = useForm({
    email: "",
    password: "",
  });

  return (
    <form>
      <label>Email</label>
      <input value={email} onChange={(e) => onChange(e, "email")} />
      <label>Password</label>
      <input value={password} onChange={(e) => onChange(e, "password")} />
      <button type="submit">Login</button>
    </form>
  );
};

export default FormExample;
