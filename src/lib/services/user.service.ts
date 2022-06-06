import { User } from "../../models/User.interface";
import { firebaseDB } from "../firebase.config";
import {
  addDoc,
  collection,
  getDocs,
  DocumentData,
  query,
  onSnapshot,
} from "@firebase/firestore";
import { Collections } from "../../models/Collections.interface";

export const addUser = async (user: User) => {
  const docRef = collection(firebaseDB, Collections.USERS);
  return await addDoc(docRef, user);
};

export const getUsers = async () => {
  const data = query(collection(firebaseDB, Collections.USERS));
  const collectionData = await getDocs(data);
  return collectionData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
