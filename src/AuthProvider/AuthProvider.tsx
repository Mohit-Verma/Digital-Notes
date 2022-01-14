import { ReactNode, useState } from "react";
import { TAuthContext } from "../Definitions";
import { sha256 } from "../Utils/SHA256";
import { AuthContext } from "./AuthContext";

type TProps = {
  children: ReactNode;
};

type TState = {
  isAuthenticated: boolean;
  userName: string;
  bearerToken: string;
};

export const AuthProvider: React.FunctionComponent<TProps> = (
  props: TProps
): JSX.Element => {
  const [authContext, setAuthContext] = useState<TState>({
    isAuthenticated: false,
    userName: "",
    bearerToken: ""
  });

  const onLogin = (userName: string, password: string): void => {
    setAuthContext({
      isAuthenticated: true,
      userName,
      bearerToken: sha256(password)
    });
  };

  const providerValue: TAuthContext = {
    ...authContext,
    onLogin
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
