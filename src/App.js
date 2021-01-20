import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import useErrors from "./useErrors";
import "./index.css";
import { classnames } from "classnames";

function App() {
  //Console Store
  const { consoles, consoles_add } = useContext(GlobalContext);

  //Todo store
  const { todos, todos_add_async, todos_addFail_async } = useContext(
    GlobalContext
  );

  //const { errors } = useErrors("auth", "consoles_remove");
  const errors = useErrors("auth", "consoles_remove");
  console.log(errors);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Context API</h1>
      <hr />
      <h3>Pending:</h3>
      <h3>Errors:</h3>
      <hr />
      <h3>Consoles</h3>
      <button onClick={() => consoles_add("Dreamcast")}>Add</button>
      {consoles && consoles.map((c) => <p>{c}</p>)}
      <hr />
      <h3>Todos</h3>
      <button onClick={() => todos_add_async()}>Add async</button>
      <button onClick={() => todos_addFail_async()}>Add async fail</button>

      {todos && todos.map((t) => <p>{t}</p>)}
    </div>
  );
}

export default App;
