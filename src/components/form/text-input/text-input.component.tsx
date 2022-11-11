import { TextField } from "@mui/material";

type TextInputType = {
  hint: string;
  value: string;
  type?: string;
  handleChange: () => void;
};

const TextInput = ({ hint, value, type, handleChange }: TextInputType) => {
  return (
    <TextField
      data-testid="TextInput"
      size="small"
      type={type}
      placeholder={hint}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextInput;
