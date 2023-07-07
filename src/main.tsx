import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/userContext/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
