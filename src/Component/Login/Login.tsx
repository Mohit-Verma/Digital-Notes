import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import { sha256 } from "../../Utils";

type TCredentials = {
  userName: string;
  password: string;
};

export const LoginComponent: React.FunctionComponent = (): JSX.Element => {
  const [credentials, setCredentials] = useState<TCredentials>({
    userName: "",
    password: ""
  });
  const authContext = useContext(AuthContext);

  const updateCredentials = (newParams: any) =>
    setCredentials((current) => ({
      ...current,
      ...newParams
    }));

  const onLogin = (): void => {
    const { userName, password } = credentials;
    if (userName && password) {
      authContext.onLogin(userName, password);
    }
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        <input
          name="user-name"
          type="text"
          placeholder="UserName"
          value={credentials.userName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            updateCredentials({
              userName: event.target.value
            })
          }
        />{" "}
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            updateCredentials({
              password: sha256(event.target.value)
            })
          }
        />{" "}
        <br />
        <input name="submit" type="submit" />
      </form>
    </div>
  );
};
