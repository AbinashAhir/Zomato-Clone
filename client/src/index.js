import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from './global-style';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
     <GlobalStyles />
    <App />
  </BrowserRouter>,
  rootElement
);
