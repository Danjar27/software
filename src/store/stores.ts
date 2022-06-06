import { UserStore } from "./userStore";
import { AuthStore } from "./authStore";
import { Stores } from "../models/stores.interface";
import { createContext } from "react";

class RootStore implements Stores {
  userStore = new UserStore();
  authStore = new AuthStore();
}

export const stores = new RootStore();
export const StoresContext = createContext(stores);
export const StoresProvider = StoresContext.Provider;
