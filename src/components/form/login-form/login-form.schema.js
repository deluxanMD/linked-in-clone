import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  username: yup.string().trim().max(100).required(),
  password: yup.string().trim().max(100).required()
});
