import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import HelperText from "../helper-text/helper-text.component";

type PasswordInputType = {
  label: string;
  name: string;
  helperText?: string;
};

const PasswordInput = ({ label, name, helperText, ...rest }: PasswordInputType) => {
  const [showPassword, setShowPassword] = useState(false);

  const { control } = useForm();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...fieldRest }, fieldState: { error } }) => (
        <TextField
          {...fieldRest}
          type={showPassword ? "text" : "password"}
          size="small"
          label={label}
          inputRef={ref}
          error={!!error}
          helperText={<HelperText error={error} helperText={helperText} />}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="end"
                  data-testid="PasswordInput.IconButton"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
          {...rest}
        />
      )}
    />
  );
};

export default PasswordInput;
