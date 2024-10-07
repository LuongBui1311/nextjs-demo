import * as yup from "yup";

export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const registerSchema = yup
.object({
  name: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches(
      /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]))/,
      "password must contains a (capital) letter, a number and a special character."
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "confirm password is not correct.")
    .required(),
})
.required();