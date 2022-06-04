import type { NextPage } from "next";
import React from "react";
import UserFormRoot from "../components/organisms/UserFormRoot";

const Home: NextPage = () => {

  return(
    <div className="center mt-20">
      <UserFormRoot />
    </div>
  )
};

export default Home;
