import React, { useMemo } from "react";
//import { useSimpleState } from "simple-context-state";
import { useSimpleState } from "../../src/package";

function Consoles() {
  //Console Store
  const { consoles, consoles_add } = useSimpleState();

  const [state, setState] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    consoles_add(state);
    setState("");
  };

  console.log("Consoles component rendered");

  return (
    <div className="listComponent">
      <h3>Consoles</h3>
      <ul>
        {consoles &&
          consoles.map((console, index) => <li key={index}>{console}</li>)}
      </ul>
      <form onSubmit={onSubmit}>
        <input value={state} onChange={(e) => setState(e.target.value)} />
        <button>Add</button>
      </form>

      <hr />
    </div>
  );
}

export default Consoles;
