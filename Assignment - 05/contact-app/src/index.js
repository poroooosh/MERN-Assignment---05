import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import global styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
