import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalProvider } from "./GlobalContext";
import { TodosStore } from "./TodosStore";
import { ConsolesStore } from "./ConsolesStore";

ReactDOM.render(
  <GlobalProvider
    root={{ component: <App />, stores: [TodosStore, ConsolesStore] }}
  />,
  
  document.getElementById("root")
);
