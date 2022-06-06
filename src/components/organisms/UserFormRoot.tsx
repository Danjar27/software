import React, { useEffect } from "react";
import { Formik } from "formik";
import FormInput from "../molecules/FormInput";
import { User } from "../../models/User.interface";
import { addUser, getUsers } from "../../lib/services/user.service";
import RoundedButton from "../atoms/RoundedButton";
import { UserSchema } from "../../models/schemas/User.schema";
import FormPhotoInput from "../molecules/FormPhotoInput";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/hook";

const UserFormRoot = observer(() => {
  const initialValues: User = {
    name: "",
    email: "",
    lastName: "",
    dni: undefined,
    birthDate: undefined,
  };

  const { user } = useStore("userStore");

  const handleSubmit = async (
    values: User,
    { resetForm }: { resetForm: () => void }
  ) => {
    await addUser(values);
    resetForm();
  };

  const formIsTouched = (values: Record<string, boolean>) => {
    return Object.keys(values).length > 0;
  };

  return (
    <Formik<User>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      {({ submitForm, isValid, touched }) => (
        <section data-testid="form" className="center w-[600px] flex-col">
          <div className="center">
            <FormPhotoInput name="photo_url" />
            <div className="flex w-80 ml-5 flex-col">
              <h1 className="text-accent font-bold text-2xl text-center mb-8">
                Formulario de Usuarios
              </h1>
              <FormInput name="name" label="Nombre:" />
              <FormInput name="lastName" label="Apellido:" />
            </div>
          </div>
          <div className="w-full">
            <FormInput name="email" label="Email:" />
          </div>
          <div className="w-full gap-5 flex">
            <div className="w-1/2">
              <FormInput name="dni" label="Cédula:" />
            </div>
            <div className="w-1/2">
              <FormInput
                name="birthDate"
                type="date"
                label="Fecha de Nacimiento:"
              />
            </div>
          </div>
          <RoundedButton
            disabled={!isValid || !formIsTouched(touched)}
            customColor="bg-accent"
            className="rounded-lg"
            text="Registrarse"
            onClick={submitForm}
          />
        </section>
      )}
    </Formik>
  );
});

export default UserFormRoot;
