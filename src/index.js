import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalProvider } from "./GlobalContext";
import { TodosStore } from "./TodosStore";

ReactDOM.render(
  <GlobalProvider root={{ component: <App />, stores: [TodosStore] }} />,
  document.getElementById("root")
);
