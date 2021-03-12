import React from "react";
import { useSimpleErrors } from "simple-context-state";
import { useSimplePending } from "simple-context-state";
// import { useSimpleErrors } from "../src/package";
// import { useSimplePending } from "../src/package";

import Todos from "./components/Todos";
import Consoles from "./components/Consoles";

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
      {/* <Consoles /> */}
    </div>
  );
}

export default App;
