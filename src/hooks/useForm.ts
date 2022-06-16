import { useState } from "react";
import { inputElement } from "typescript";

export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = (value: inputElement, field: keyof T) => {
    setState({
      ...state,
      [field]: value.target.value,
    });
  };

  const setFormValue = (form: T) => {
    setState({
      ...state,
      ...form,
    });
  };

  return {
    ...state,
    form: state,
    onChange,
    setFormValue,
  };
};
