import React from "react";
import { useSimpleErrors } from "simple-context-state";
import { useSimplePending } from "simple-context-state";

import Todos from "./components/Todos";
import Pending from "./components/Pending";
import Errors from "./components/Errors";

function App() {
  const errors = useSimpleErrors();
  const pending = useSimplePending();

  return (
    <div className="container">
      {pending && <Pending />}
      {errors && <Errors />}
      <div className="header">Simple-Context-State</div>
      <Todos />
    </div>
  );
}

export default App;
