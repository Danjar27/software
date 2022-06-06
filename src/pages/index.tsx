import type { NextPage } from "next";
import React from "react";
import UserFormRoot from "../components/organisms/UserFormRoot";
import UserList from "../components/templates/UserList";

const Home: NextPage = () => {
  return (
    <div className="flex justify-between items-center h-screen w-screen">
      <div className="w-1/2 center">
        <UserFormRoot />
      </div>
      <div className="flex justify-center w-1/2 bg-accent h-screen overflow-y-scroll p-20">
        <UserList />
      </div>
    </div>
  );
};

export default Home;
