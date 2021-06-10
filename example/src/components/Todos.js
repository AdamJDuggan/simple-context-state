import React from "react";
//import { useSimpleState } from "simple-context-state";
import { useSimpleState } from "../../src/package";

function Todos() {
  //Todos Store
  const { todos, todos_add, todos_fetch, todos_fail } = useSimpleState();

  return (
    <div className="listComponent">
      <h3>Todos</h3>
      <ul>
        {todos && todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
      <button onClick={() => todos_fetch()}>Get todo from API</button>
      <button onClick={() => todos_fail()}>API error</button>
      <br /> <br />
      <hr />
    </div>
  );
}

export default Todos;
