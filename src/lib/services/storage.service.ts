import { firebaseStorage } from "../firebase.config";
import { STORAGE } from "../../models/Collections.interface";
import {
  getDownloadURL,
  ref,
  StorageReference,
  uploadBytes,
} from "@firebase/storage";

export const saveFile = async (path: string, file: File): Promise<string> => {
  const filePath = `${STORAGE.ROOT}/${path}/${file.name?.replace(/\s/g, "")}`;
  const fileRef: StorageReference = ref(firebaseStorage, filePath);
  await uploadBytes(fileRef, file);
  const url: string = await getDownloadURL(fileRef);
  if (url) {
    return url;
  }
  return "";
};

export const Loader = async (path: string): Promise<string> => {
  const filePath = `${STORAGE.ROOT}/${path}`;
  const fileRef: StorageReference = ref(firebaseStorage, filePath);
  const url: string = await getDownloadURL(fileRef);
  if (url) {
    return url;
  }
  return "";
}