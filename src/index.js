import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CountProvider } from "./counter-context";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </StrictMode>
);
