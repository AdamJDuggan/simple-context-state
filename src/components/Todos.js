import React from "react";
import { useSimpleState } from "simple-context-state";
//import { useSimpleState } from "../simple-state";

function Consoles() {
  //Todos Store
  const { todos, todos_addAsync, todos_addAsyncError } = useSimpleState();

  return (
    <div>
      <h3>Todos</h3>
      <button onClick={() => todos_addAsync()}>Add async</button>
      <button onClick={() => todos_addAsyncError()}>Add async fail</button>
      {todos && todos.map((t) => <p>{t}</p>)}
      <hr />
    </div>
  );
}

export default Consoles;
