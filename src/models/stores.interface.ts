import { AuthStore } from "../store/authStore";
import { UserStore } from "../store/userStore";

export interface Stores {
  authStore: AuthStore;
  userStore: UserStore;
}