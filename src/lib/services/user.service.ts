import {User} from "../../models/interfaces/user.interface";

export const getUsers = async () => {
  const response = await fetch("api/users", {
    method: "GET",
  });
  return await response.json();
};

export const addUser = async (user: Partial<User>) => {
  return await fetch("api/users", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user),
  });
};
