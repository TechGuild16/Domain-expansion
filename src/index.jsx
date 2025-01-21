import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Your main App component
import "./index.css"; // Keep your CSS imports

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
