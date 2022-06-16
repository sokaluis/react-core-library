import { StyledButton } from "./styles";

interface IAddButtonProps {
  addItem: () => void;
  label: string;
}

const AddButton = ({ addItem, label }: IAddButtonProps) => {
  return <StyledButton onClick={addItem}>{label}</StyledButton>;
};

export default AddButton;
