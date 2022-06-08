import { action, makeAutoObservable, observable } from "mobx";
import { User, Unsubscribe, UserCredential } from "@firebase/auth";
import { firebaseAuth } from "../lib/firebase.config";
import {
  logOutGoogle,
  signInWithGoogle,
  signUpWithEmail,
  singInWithEmail,
} from "../lib/firebase_auth";
import { FirestoreError } from "firebase/firestore";

export class AuthStore {
  auth: User = {} as User;
  onAuthStateChangedUnsuscribe: Unsubscribe = {} as any;

  constructor() {
    makeAutoObservable(this, {
      auth: observable,
      setAuth: action,
    });
    this.authOnAuthStateChanged();
  }

  setAuth(auth: User): void {
    this.auth = auth;
  }

  async signInWithGoogle(): Promise<User | void> {
    const authUser: UserCredential = await signInWithGoogle();
    if (authUser) {
      this.setAuth(authUser.user);
      return authUser.user;
    }
  }

  async signUp(email: string, password: string): Promise<User | void> {
    const authUser = await signUpWithEmail(email, password);
    if (authUser) {
      this.setAuth((authUser as UserCredential).user);
      return (authUser as UserCredential).user;
    }
  }

  async logOut(): Promise<void> {
    this.onAuthStateChangedUnsuscribe();
    this.setAuth(undefined as any);
    await logOutGoogle();
  }

  async signIn(email: string, password: string) {
    const authUser = await singInWithEmail(email, password);
    if (authUser && (authUser as UserCredential).user) {
      const authUserCredentials = authUser as UserCredential;
      this.setAuth(authUserCredentials.user);
      return authUserCredentials.user;
    } else {
      return false;
    }
  }

  authOnAuthStateChanged() {
    this.onAuthStateChangedUnsuscribe = firebaseAuth.onAuthStateChanged(
      (user) => {
        this.setAuth(user as User);
      }
    );
  }
}
