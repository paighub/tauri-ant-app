import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { VersionProvider } from "./context/VersionContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <VersionProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </VersionProvider>
  </React.StrictMode>,
);
