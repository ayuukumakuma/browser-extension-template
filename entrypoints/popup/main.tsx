import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app";
import "./style.css";

const rootElement = document.getElementById("root") ?? undefined;

if (rootElement === undefined) {
  throw new Error("Popup root element was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
