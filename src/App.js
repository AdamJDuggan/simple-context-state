import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function App() {
  const { todos, addTodo, addTodoAsync, consoles, addConsole } = useContext(
    GlobalContext
  );

  return (
    <div>
      <h1>Context API</h1>
      <hr />
      <h3>Todos</h3>
      <button onClick={() => addTodo("Do decorating")}>Add</button>
      <button onClick={() => addTodoAsync()}>Add async</button>
      {todos && todos.map((t) => <p>{t}</p>)}
      <hr />
      <h3>Consoles</h3>
      <button onClick={() => addConsole("Dreamcast")}>Add</button>

      {consoles && consoles.map((c) => <p>{c}</p>)}
    </div>
  );
}

export default App;
