import React from "react";
import useContextState from "../simple-context/useContextState";

function Consoles() {
  //Console Store
  const { consoles, consoles_add } = useContextState();

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
