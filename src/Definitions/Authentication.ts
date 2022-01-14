export type TAuthContext = {
  isAuthenticated: boolean;
  userName: string;
  bearerToken: string;
  onLogin: (userName: string, password: string) => void;
};
