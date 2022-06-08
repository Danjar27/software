import type { NextPage } from "next";
import React from "react";
import { Authenticate } from "../components/templates/Authenticate";
import LoginForm from "../components/templates/LoginForm";

const Home: NextPage = () => {
  return (
    <Authenticate>
      <LoginForm />
    </Authenticate>
  );
};

export default Home;
