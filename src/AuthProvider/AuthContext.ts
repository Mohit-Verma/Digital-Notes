import { Context, createContext } from "react";
import { AuthContextDefinitions as def } from "../Definitions";
import { sha256 } from "../Utils/SHA256";

export const AuthContext: Context<def.TAuthContext> = createContext<
  def.TAuthContext
>({
  bearerToken: "",
  userName: "",
  isAuthenticated: false,
  onLogin: (userName = "", password = "") => {
    console.warn("This should be handled via context ", {
      user: userName,
      bearer: sha256(password)
    });
  }
});
