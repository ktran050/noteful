import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import HISTORY from "./history";

ReactDOM.render(
  <Router history={HISTORY}>
    <App />
  </Router>,
  document.getElementById("root")
);
