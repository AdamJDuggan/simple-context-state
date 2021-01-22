import React from "react";
import useSimpleState from "../simple-state/useSimpleState";

function Consoles() {
  //Console Store
  const { consoles, consoles_add } = useSimpleState();

  return (
    <div>
      <h3>Consoles</h3>
      <button onClick={() => consoles_add("Dreamcast")}>Add</button>
      {consoles && consoles.map((c) => <p>{c}</p>)}
      <hr />
    </div>
  );
}

export default Consoles;
