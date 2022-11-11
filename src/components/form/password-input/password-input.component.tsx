import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

type PasswordInputType = {
  label: string;
};

const PasswordInput = ({ label }: PasswordInputType) => {
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
          type="password"
          {...field}
        />
      )}
    />
  );
};

export default PasswordInput;
