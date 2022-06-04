import React from "react";
import { Formik } from "formik";
import FormInput from "../molecules/FormInput";
import { User } from "../../models/interfaces/User.interface";
import { addUser } from "../../lib/services/user.service";
import RoundedButton from "../atoms/RoundedButton";
import { UserSchema } from "../../models/schemas/User.schema";

const UserFormRoot = () => {
  const initialValues: User = {
    name: "",
    email: "",
    lastName: "",
    dni: undefined,
    birthDate: undefined,
  };

  const handleSubmit = async (
    values: User,
    { resetForm }: { resetForm: () => void }
  ) => {
    await addUser(values);
    resetForm();
  };

  return (
    <Formik<User>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      {({ submitForm }) => (
        <section className="w-80 flex-col">
          <FormInput name="name" label="Nombre:" />
          <FormInput name="lastName" label="Apellido:" />
          <FormInput name="email" label="Email:" />
          <FormInput name="dni" label="Cédula:" />
          <FormInput
            name="birthDate"
            type="date"
            label="Fecha de Nacimiento:"
          />
          <RoundedButton text="subir usuario" onClick={submitForm} />
        </section>
      )}
    </Formik>
  );
};

export default UserFormRoot;
