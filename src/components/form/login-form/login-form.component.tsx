import TextInput from "components/form/fields/text-input/text-input.component";
import PasswordInput from "components/form/fields/password-input/password-input.component";
import { Box } from "@mui/material";

const LoginForm = () => {
  return (
    <Box data-testid="Login.Form">
      <TextInput label="Email or Phone" name="username" fullWidth />
      <PasswordInput label="Password" name="password" fullWidth />
    </Box>
  );
};

export default LoginForm;
