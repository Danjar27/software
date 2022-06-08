import { User } from "../../models/User.interface";
import { firebaseDB } from "../firebase.config";
import {
  setDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
} from "@firebase/firestore";
import { Collections } from "../../models/Collections.interface";

export const addUser = async (user: User) => {
  const docRef = user.id
    ? doc(collection(firebaseDB, Collections.USERS), user.id)
    : doc(collection(firebaseDB, Collections.USERS));
  return await setDoc(docRef, user);
};

export const getUsers = async () => {
  const data = query(collection(firebaseDB, Collections.USERS));
  const collectionData = await getDocs(data);
  return collectionData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const getUserByUid = async (uid: string) => {
  const data = query(
    collection(firebaseDB, Collections.USERS),
    where("uid", "==", uid ?? "")
  );
  return (await getDocs(data)).docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))[0];
};
