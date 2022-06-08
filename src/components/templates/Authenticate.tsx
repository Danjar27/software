import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { firebaseAuth } from "../../lib/firebase.config";
import { useStore } from "../../store/hook";

interface Props {
  children: React.ReactNode;
}

export const Authenticate = observer(({ children }: Props) => {
  const router = useRouter();
  const authStore = useStore("authStore");
  const isUnmounted = useRef(false);

  useEffect(() => {
    const onAuthStateChangedUnsuscribe = firebaseAuth.onAuthStateChanged(
      async (loggedUser) => {
        if (loggedUser) {
          authStore.setAuth(loggedUser);
          router.push("/home");
        } else {
          router.push("/");
        }
      }
    );
    return () => {
      onAuthStateChangedUnsuscribe();
      isUnmounted.current = true;
    };
  }, []);

  return <div>{children}</div>;
});
