import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="e49db595acd644398a6defe8cfcdee28"
      domain="https://i7faculty.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <App />
    </KindeProvider>
  </StrictMode>,
);
