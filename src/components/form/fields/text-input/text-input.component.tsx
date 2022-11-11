import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

type TextInputType = {
  label: string;
  name: string;
  type?: string;
};

const TextInput = ({ label, type = "text", name }: TextInputType) => {
  const { control } = useForm();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextField
          id={label}
          variant="outlined"
          label={label}
          size="small"
          type={type}
          {...field}
        />
      )}
    />
  );
};

export default TextInput;
