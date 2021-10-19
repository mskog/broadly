/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/tailwind.css";
import App from "./App";

const rootEl = document.getElementById("root");

const render = (Component: React.FunctionComponent) => {
  ReactDOM.render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    rootEl
  );
};

render(App);
