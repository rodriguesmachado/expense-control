import { useEffect, useState } from "react";
import * as firebaseAuth from "firebase/auth";
import { AuthCredential } from "@context/firebase/types";
import { FirebaseApp } from "firebase/app";
import { User } from "firebase/auth";

export const useAuth = (firebaseApp: FirebaseApp) => {

  const auth = firebaseAuth.getAuth(firebaseApp);
  const [user, setUser] = useState<User | null>(null);

  const login = async ({ email, password }: AuthCredential) => {
    try {
      const userCredential = await firebaseAuth.signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.warn(error);
    }
  }

  const logout = async () => {
    try {
      await firebaseAuth.signOut(auth);
      setUser(null);
    } catch (error) {
      console.warn(error);
    }
  }

  const createUser = async ({ email, password }: AuthCredential) => {
    try {
      await firebaseAuth.createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(auth, setUser);
    return unsubscribe();
  }, [auth]);


  return {
    user,
    login,
    logout,
    createUser
  }
}
