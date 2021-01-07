import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalProvider } from "./GlobalContext";
import { debugContextDevtool } from "react-context-devtool";

const container = document.getElementById("root");

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  container
);

debugContextDevtool(container, {});
