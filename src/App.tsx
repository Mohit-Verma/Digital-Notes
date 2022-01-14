import { useContext } from "react";
import { LoginComponent } from "./Component/Login";
import { AuthContext } from "./AuthProvider";
import { Note } from "./Component/Notes/Note";
import "./styles.css";

export default function App() {
  const authContext = useContext(AuthContext);

  if (authContext.isAuthenticated && authContext.bearerToken) {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h3> Welcome onboard "{authContext.userName}"</h3>
        <Note
          items={[
            {
              id: "123",
              content: "Note Item",
              checked: false,
              severity: "HIGH"
            }
          ]}
        />
      </div>
    );
  }

  return <LoginComponent />;
}
