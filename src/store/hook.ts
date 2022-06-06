import React from "react";
import { Stores } from "../models/stores.interface";
import { StoresContext } from "./stores";

export const useStores = () => React.useContext(StoresContext);

export const useStore = <T extends keyof Stores>(store: T): Stores[T] =>
  React.useContext(StoresContext)[store];
