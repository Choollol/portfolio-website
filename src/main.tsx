import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { HashRouter } from "react-router";
import ScrollToTop from "@/components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
        <ScrollToTop />
        <App />
    </HashRouter>
  </StrictMode>
);
