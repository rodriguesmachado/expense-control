import { FirebaseApp } from "firebase/app";

export interface FirebaseContextDTO {
  firebaseApp: FirebaseApp
  user: any;
  login(authCredential: AuthCredential): Promise<void>;
  logout(): Promise<void>;
  createUser(authCredential: AuthCredential): Promise<void>;
}

export interface FirebaseProviderProps {
  children: any;
}

export interface AuthCredential {
  email: string;
  password: string;
}
