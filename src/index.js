import React from "react";
import ReactDOM from "react-dom/client";
import App from "./js/App";
import "./css/index.css";
import "./css/registration.css";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);