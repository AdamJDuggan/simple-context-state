import React from "react";
import { useSimpleErrors } from "simple-context-state";
import { useSimplePending } from "simple-context-state";
// import { useSimpleErrors } from "./simple-state";
// import { useSimplePending } from "./simple-state";

import Consoles from "./components/Consoles";
import Todos from "./components/Todos";
import Pending from "./components/Pending";
import Errors from "./components/Errors";

function App() {
  const errors = useSimpleErrors();
  const pending = useSimplePending();

  return (
    <>
      <div className="container">
        {pending && <Pending />}
        {errors && <Errors />}
        <div className="header">Simple-Context-State</div>

        <Consoles />
        <Todos />
      </div>
    </>
  );
}

export default App;
