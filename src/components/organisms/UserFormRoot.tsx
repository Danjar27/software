import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import FormInput from "../molecules/FormInput";
import { User } from "../../models/User.interface";
import {
  addUser,
  getUserByUid,
  getUsers,
} from "../../lib/services/user.service";
import RoundedButton from "../atoms/RoundedButton";
import { UserSchema } from "../../models/schemas/User.schema";
import FormPhotoInput from "../molecules/FormPhotoInput";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/hook";
import { AuthStore } from "../../store/authStore";

const UserFormRoot = observer(() => {
  const initialValues: User = {
    name: "",
    email: "",
    lastName: "",
    dni: undefined,
    birthDate: undefined,
  };
  const [formValues, setFormValues] = useState<User>(initialValues);
  const [alreadyExists, setAlreadyExists] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { auth } = useStore("authStore");

  const handleSubmit = async (values: User) => {
    setLoading(true);
    await addUser({ ...values, uid: auth.uid });
    setLoading(false);
  };

  const formIsTouched = (values: Record<string, boolean>) => {
    return Object.keys(values).length > 0;
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      (async () => {
        const user = await getUserByUid(auth?.uid);
        if (user) {
          setFormValues(user as any);
          setAlreadyExists(true);
        }
      })();
    }
    return () => {
      mounted = false;
    };
  }, [auth, loading]);

  return (
    <Formik<User>
      enableReinitialize={true}
      initialValues={formValues as User}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      {({ submitForm, isValid, touched, values }) => (
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
              <FormInput name="dni" label="Cédula:" value={values?.dni} />
            </div>
            <div className="w-1/2">
              <FormInput
                name="birthDate"
                type="date"
                label="Fecha de Nacimiento:"
                value={values?.birthDate as string}
              />
            </div>
          </div>
          <div className="mt-10 w-full">
            <RoundedButton
              disabled={
                !isValid || (!formIsTouched(touched) && !values.photo_url)
              }
              customColor="bg-accent"
              className="rounded-lg"
              text={alreadyExists ? "Actualizar" : "Guardar"}
              onClick={submitForm}
            />
          </div>
        </section>
      )}
    </Formik>
  );
});

export default UserFormRoot;
