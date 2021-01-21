import React from "react";
import useContextState from "../simple-context/useContextState";

function Consoles() {
  //Todos Store
  const { todos, todos_add_async, todos_addFail_async } = useContextState();

  return (
    <div>
      <h3>Todos</h3>
      <button onClick={() => todos_add_async()}>Add async</button>
      <button onClick={() => todos_addFail_async()}>Add async fail</button>
      {todos && todos.map((t) => <p>{t}</p>)}
      <hr />
    </div>
  );
}

export default Consoles;
