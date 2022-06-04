import { getUsers, addUser } from "../lib/services/user.service";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { User } from "../models/interfaces/user.interface";

const Test = () => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    (async () => {
      if(pressed){
        console.log(await getUsers());
      }
    })();
  }, [pressed]);

  const handleClick = () => {
    setPressed(!pressed);
  };

  const initialValues: Partial<User> = {
    name: "",
    id: 0,
  };

  return (
    <>
      <Formik<Partial<User>> initialValues={initialValues} onSubmit={addUser}>
        {({ values, handleChange, submitForm }) => (
          <>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={values.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="id"
              placeholder="id"
              value={values.id}
              onChange={handleChange}
            />
            <button onClick={submitForm}>Add User</button>;
          </>
        )}
      </Formik>
      <button onClick={handleClick}>get Users</button>;
    </>
  );
};

export default Test;
