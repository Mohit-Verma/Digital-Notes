import { render } from "react-dom";
import { AuthProvider } from "./AuthProvider";
import App from "./App";

const rootComponent: JSX.Element = (
  <AuthProvider>
    <App />
  </AuthProvider>
);
const rootElement = document.getElementById("root");

render(rootComponent, rootElement);
