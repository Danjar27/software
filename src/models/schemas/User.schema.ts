import * as Yup from "yup";
import { requiredFormat } from "../../utils/functions/requiredFormat";

export const UserSchema = Yup.object().shape({
  name: Yup.string()
    .nullable()
    .required(requiredFormat("un nombre"))
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
  lastName: Yup.string()
    .nullable()
    .required(requiredFormat("un apellido"))
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido no puede tener más de 50 caracteres"),
  email: Yup.string()
    .nullable()
    .email("El email no es válido")
    .required(requiredFormat("un email")),
  dni: Yup.number()
    .nullable()
    .typeError("la cédula debe ser un número")
    .required(requiredFormat("un número de cédula"))
    .test("dni", "La cédula debe tener 10 dígitos", (value) => {
      return value?.toString().length === 10;
    }),
  birthDate: Yup.date()
    .nullable()
    .min(
      new Date(1940, 0, 1),
      "La fecha de nacimiento no puede ser menor a 1/1/1940"
    )
    .max(new Date(), "La fecha de nacimiento no puede ser mayor a la actual")
    .required(requiredFormat("una fecha de nacimiento")),
});