import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Route } from "react-router-dom";
import App from "./App";
import "./http/index";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={App}></Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
