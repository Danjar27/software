import { FirebaseError } from "firebase/app";
import {
  applyActionCode,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
} from "@firebase/auth";
import { FirestoreError } from "firebase/firestore";
import { firebaseAuth } from "./firebase.config";

const signInWithGoogle = async (): Promise<UserCredential> => {
  return await signInWithPopup(
    firebaseAuth,
    new GoogleAuthProvider().setCustomParameters({ prompt: "select_account" })
  );
};

const singInWithEmail = async (email: string, password: string) =>
  signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      return error as FirestoreError;
    });

const signUpWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential | FirestoreError> =>
  createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(async (userCredential) => {
      await sendEmailVerification(userCredential.user);
      return userCredential;
    })
    .catch((error) => {
      return error;
    });

const confirmEmailVerification = async (
  oobCode: string
): Promise<boolean | FirebaseError> =>
  applyActionCode(firebaseAuth, oobCode)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return error;
    });

const logOutGoogle = async (): Promise<void> => {
  await signOut(firebaseAuth);
};

const resetPasswordProcess = async (
  newPassword: string,
  oobCode: string
): Promise<boolean | FirestoreError> =>
  confirmPasswordReset(firebaseAuth, oobCode, newPassword)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return error;
    });

export {
  signInWithGoogle,
  logOutGoogle,
  singInWithEmail,
  signUpWithEmail,
  resetPasswordProcess,
  confirmEmailVerification,
};
