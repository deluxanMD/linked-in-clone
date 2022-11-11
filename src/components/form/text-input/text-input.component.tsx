import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

type TextInputType = {
  label: string;
  type?: string;
};

const TextInput = ({ label, type }: TextInputType) => {
  const { control } = useForm();

  return (
    <Controller
      name={label}
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
