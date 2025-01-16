import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Pastikan ini sesuai dengan konfigurasi Tailwind

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
