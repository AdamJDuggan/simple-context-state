// React
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// SimpleState API
import { SimpleProvider } from "./simple-state/GlobalContext";

// Stores created by the user ...
import { TodosStore } from "./stores/TodosStore";
import { ConsolesStore } from "./stores/ConsolesStore";

ReactDOM.render(
  <SimpleProvider component={<App />} stores={[TodosStore, ConsolesStore]} />,

  document.getElementById("root")
);
