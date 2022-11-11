import TextInput from "components/form/fields/text-input/text-input.component";
import PasswordInput from "components/form/fields/password-input/password-input.component";

const LoginForm = () => {
  return (
    <div data-testid="Login.Form">
      <TextInput label="Email or Phone" name="username" />
      <PasswordInput label="Password" name="password" />
    </div>
  );
};

export default LoginForm;
