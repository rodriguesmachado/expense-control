import { FunctionComponent } from "react";
import { FirebaseProvider } from "@context/firebase";

interface AllProvidersProps {
  children: any
}

export const AllProviders: FunctionComponent<AllProvidersProps> = ({ children }) => {
  return (
    <FirebaseProvider>
      {children}
    </FirebaseProvider>
  );
}
