import React from "react";
import useSimpleState from "../simple-state/useSimpleState";

function Consoles() {
  //Todos Store
  const { todos, todos_addAsync } = useSimpleState();

  return (
    <div>
      <h3>Todos</h3>
      <button onClick={() => todos_addAsync("HI")}>Add async</button>
      {todos && todos.map((t) => <p>{t}</p>)}
      <hr />
    </div>
  );
}

export default Consoles;
