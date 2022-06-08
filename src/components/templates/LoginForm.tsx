import { Formik } from "formik";
import React from "react";
import AuthButton from "../atoms/AuthButton";
import FormInput from "../molecules/FormInput";
import { useStore } from "../../store/hook";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Banner from "../molecules/Banner";
import { validationSchema } from "../../models/schemas/LoginSchema";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
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
      return router.push("/home");
    }
    return toast.error("Error al iniciar sesión", {
      position: "bottom-right",
    });
  };

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const auth = await authStore.signIn(values.email, values.password);
      handleRedirect(auth);
    } catch (e) {
      console.log(e);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const auth = await authStore.signInWithGoogle();
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
        {({ values, touched, isValid }) => (
          <div className="w-1/2 rounded-lg bg-white p-8">
            <Banner />
            <div className="center mt-5">
              <AuthButton
                gmail
                label="Ingresar con Google"
                onClick={handleGoogleLogin}
              />
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-300">
                O también puedes:
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
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
                disabled={!isValid || !formIsTouched(touched)}
                label="Ingresar con Correo"
                onClick={() => {
                  handleLogin({
                    email: values.email,
                    password: values.password,
                  });
                }}
              />
            </div>
            <div className="center mt-5">
              <p className="mr-4 text-gray-600">¿No tienes cuenta?</p>
              <button
                className="font-bold text-accent"
                onClick={() => router.push("/register")}
              >
                Regístrate con tu correo
              </button>
            </div>
          </div>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
