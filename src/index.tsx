/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.css";
import App from "./App";

const rootEl = document.getElementById("root");

const render = (Component: any): void => {
  ReactDOM.render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    rootEl
  );
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if (module.hot) {
  module.hot.accept("./App", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
