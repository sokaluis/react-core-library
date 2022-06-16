import { useState } from "react";
import { inputElement } from "typescript";

interface UseFieldProps {
  type: string;
}

export const useField = ({ type = "text" }: UseFieldProps) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: inputElement) => {
    setValue(e.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};
