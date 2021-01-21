// React
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// SimpleContext API
import { Provider } from "./simple-context/GlobalContext";

// Stores created by the user ...
import { TodosStore } from "./stores/TodosStore";
import { ConsolesStore } from "./stores/ConsolesStore";

ReactDOM.render(
  <Provider component={<App />} stores={[TodosStore, ConsolesStore]} />,

  document.getElementById("root")
);
