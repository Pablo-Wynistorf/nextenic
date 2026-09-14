import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import { I18nProvider } from "@/lib/i18n";
import "@/styles/tokens.css";

/* BASE_URL carries the Vite base path, so the router works both on a custom
   domain ("/") and on a GitHub Pages project path ("/<repo>/"). */
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nProvider>
      <BrowserRouter basename={basename || "/"}>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </StrictMode>,
);
