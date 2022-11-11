import { Typography, Box, Divider } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginForm from "components/form/login-form/login-form.component";
import { useLoginForm } from "components/form/login-form/login-form.hooks";
import Links from "components/links/links.component";
import { FormProvider } from "react-hook-form";
import * as S from "./login.styles";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import logo from "assets/linkedin_logo.png";

const Login = () => {
  const formMethods = useLoginForm();

  return (
    <S.PageContainer data-testid="Login.Page">
      <S.Logo src={logo} alt="LinkedIn Logo" />
      <S.LoginFormContainer elevation={3}>
        <FormProvider {...formMethods}>
          <Box mb={2}>
            <Typography variant="h4">Sign in</Typography>
            <Typography variant="body2">Stay updated on your professional world</Typography>
          </Box>
          <LoginForm />
          <Links text="Forgot password?" path="/forgot" />
          <LoadingButton variant="contained" sx={{ marginTop: 1, marginBottom: 1 }} fullWidth>
            Sign in
          </LoadingButton>
          <Divider>or</Divider>
          <LoadingButton variant="outlined" sx={{ marginTop: 1 }} fullWidth>
            <GoogleIcon sx={{ marginRight: 1, color: "#DB4437" }} /> Sign in with Google
          </LoadingButton>
          <LoadingButton variant="outlined" sx={{ marginTop: 1, marginBottom: 1 }} fullWidth>
            <AppleIcon sx={{ marginRight: 1, color: "#000" }} /> Sign in with Apple
          </LoadingButton>
        </FormProvider>
      </S.LoginFormContainer>
    </S.PageContainer>
  );
};

export default Login;
