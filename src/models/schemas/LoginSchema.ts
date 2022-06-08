import * as Yup from "yup";
import { requiredFormat } from "../../utils/functions/requiredFormat";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .nullable()
    .email("El email no es válido")
    .required(requiredFormat("un email")),
  password: Yup.string().nullable().required(requiredFormat("una contraseña")),
});
