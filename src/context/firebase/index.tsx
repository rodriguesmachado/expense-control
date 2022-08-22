import {
  createContext,
  useContext,
  FunctionComponent,
} from "react";

import {
  FirebaseContextDTO,
  FirebaseProviderProps
} from "./types";

import * as firebaseApp from "firebase/app";
import { firebaseConfig } from "@config/firebase.config";
import { useAuth } from "./hooks/useAuth";

const FirebaseContext = createContext<FirebaseContextDTO>({} as FirebaseContextDTO);

export const FirebaseProvider: FunctionComponent<FirebaseProviderProps> = ({ children }) => {

  const app = firebaseApp.initializeApp(firebaseConfig);

  const { user, login, logout, createUser } = useAuth(app);

  return (
    <FirebaseContext.Provider value={{
      firebaseApp: app,
      user,
      login,
      createUser,
      logout
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) throw new Error("Conext not found");
  return context;
}
