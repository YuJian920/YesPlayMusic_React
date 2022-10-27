import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import Layout from "./layout";
import AppProvider from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <Layout />
    </AppProvider>
  </React.StrictMode>
);
