import { action, makeAutoObservable, observable } from "mobx";
import { User } from "../models/User.interface";

export class AuthStore {
  user: User = {
    id: undefined,
    name: "",
    email: "",
    lastName: "",
    dni: undefined,
    birthDate: undefined,
  };
  constructor() {
    makeAutoObservable(this, {
      user: observable,
      setUser: action,
    });
  }

  setUser = (user: User) => {
    this.user = user;
  };
}