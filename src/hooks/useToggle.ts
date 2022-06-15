import { MouseEvent, useState } from "react";
// TODO: made toggleValue params a generic type
type toggleValueParams = boolean | MouseEvent;
type UseToggleReturnType = [boolean, (value?: toggleValueParams) => void];

export const useToggle = (defaultValue: boolean): UseToggleReturnType => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleValue = (value?: toggleValueParams) => {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };

  return [value, toggleValue];
};
