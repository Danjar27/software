import { Formik } from "formik";
import React from "react";
import AuthButton from "../atoms/AuthButton";
import FormInput from "../molecules/FormInput";
import { useStore } from "../../store/hook";
import { useRouter } from "next/router";
import Banner from "../molecules/Banner";
import { ToastContainer, toast } from "react-toastify";
import { validationSchema } from "../../models/schemas/LoginSchema";

const RegisterForm = () => {
  const authStore = useStore("authStore");
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleRedirect = (auth: any) => {
    if (auth) {
      return router.push("/");
    }
    return () => toast("NO LOGIN");
  };

  const handleRegister = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      const auth = await authStore.signUp(values.email, values.password);
      handleRedirect(auth);
    } catch (e) {
      console.log(e);
    }
  };

  const formIsTouched = (values: Record<string, boolean>) => {
    return Object.keys(values).length > 0;
  };

  return (
    <div className="h-screen center w-screen bg-accent">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, isValid, touched }) => (
          <div className="w-1/2 rounded-lg bg-white p-8">
            <Banner />
            <FormInput
              label="Correo"
              name="email"
              placeholder="test@gmail.com"
            />
            <FormInput
              label="Contraseña"
              name="password"
              type="password"
              placeholder="User Name"
            />
            <div className="center gap-4">
              <AuthButton
                label="Registrarse con Correo"
                disabled={!isValid || !formIsTouched(touched)}
                onClick={() => {
                  handleRegister({
                    email: values.email,
                    password: values.password,
                  });
                }}
              />
            </div>
            <div className="center mt-5">
              <p className="mr-2">¿Ya tienes cuenta?</p>
              <button className="font-bold" onClick={() => router.push("/")}>
                Ingresa Aquí
              </button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
