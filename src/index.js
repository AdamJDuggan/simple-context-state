// React
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Styles
import "./index.css";

// SimpleState Provider
// import { SimpleProvider } from "simple-context-state";
import { SimpleProvider } from "./simple-state";

// Stores created by the user ...
import { TodosStore } from "./stores/TodosStore";
import { ConsolesStore } from "./stores/ConsolesStore";

ReactDOM.render(
  <SimpleProvider component={<App />} stores={[TodosStore, ConsolesStore]} />,

  document.getElementById("root")
);
