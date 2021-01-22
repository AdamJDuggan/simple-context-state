import React from "react";
import useSimpleState from "../simple-state/use-simple-state";

function Consoles() {
  //Todos Store
  const { todos, todos_addAsync } = useSimpleState();

  return (
    <div>
      <h3>Todos</h3>
      <button onClick={() => todos_addAsync("jsonplaceholder")}>
        Add async
      </button>
      <button onClick={() => todos_addAsync("jsonplaceholfder")}>
        Add async fail
      </button>
      {todos && todos.map((t) => <p>{t}</p>)}
      <hr />
    </div>
  );
}

export default Consoles;
