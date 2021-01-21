import React from "react";
import useErrors from "./simple-context/useErrors";
import usePending from "./simple-context/usePending";
import useConextState from "./simple-context/useContextState";

import Consoles from "./components/Consoles";
import Todos from "./components/Todos";

function App() {
  //Todo store

  const errors = useErrors();

  const pending = usePending();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Context API</h1>
      <hr />
      <h3>Pending:</h3>
      {pending && pending.map((action) => <p>{action}</p>)}
      <hr />
      <h3>Errors:</h3>
      {errors && errors.map((error) => <p>{error}</p>)}
      <hr />
      <Consoles />
      <Todos />
    </div>
  );
}

export default App;
