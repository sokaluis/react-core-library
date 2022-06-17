import { useState, useCallback } from "react";

// TODO: try to type this function
export const useStateWithValidation = (
  validationFunc: (value: any) => boolean,
  initialValue: any
) => {
  const [state, setState] = useState<any>(initialValue);
  const [isValid, setIsValid] = useState(() => validationFunc(state));

  const onChange = useCallback(
    (nextState: any) => {
      const value =
        typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [validationFunc]
  );

  return [state, onChange, isValid];
};
