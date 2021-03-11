import React from "react";
// import { useSimpleState } from "simple-context-state";
import { useSimpleState } from "../../src/package";

function Todos() {
  //Todos Store
  const { todos, todos_add, todos_fetch, todos_fetch_fail } = useSimpleState();

  return (
    <div className="listComponent">
      <h3>Todos</h3>
      <button onClick={() => todos_add("Visit Gran")}>Add </button>
      <button onClick={() => todos_fetch()}>Add async</button>
      <button onClick={() => todos_fetch_fail()}>Add async fail</button>
      {todos && todos.map((t) => <p>{t}</p>)}
      <hr />
    </div>
  );
}

export default Todos;
