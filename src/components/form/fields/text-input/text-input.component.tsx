import { Box, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

type TextInputType = {
  label: string;
  name: string;
  type?: string;
  fullWidth?: boolean;
};

const TextInput = ({ label, type = "text", name, ...rest }: TextInputType) => {
  const { control } = useForm();

  return (
    <Box mb={1}>
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
            {...rest}
            {...field}
          />
        )}
      />
    </Box>
  );
};

export default TextInput;
