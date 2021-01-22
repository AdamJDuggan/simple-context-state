import React from "react";
import useSimpleErrors from "./simple-state/useSimpleErrors";
import useSimplePending from "./simple-state/useSimplePending";

import Consoles from "./components/Consoles";
import Todos from "./components/Todos";

function App() {
  const errors = useSimpleErrors();

  const pending = useSimplePending();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Context API</h1>
      <hr />
      <h3>Pending:</h3>
      {pending && pending.map((action) => <p>{action}</p>)}
      <hr />
      <h3>Errors:</h3>
      {errors &&
        errors.map((error) => (
          <p>
            {error.type} : {error.message}
          </p>
        ))}
      <hr />
      <Consoles />
      <Todos />
    </div>
  );
}

export default App;
