import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function App() {
  const { characters, addCharacter } = useContext(GlobalContext);

  return (
    <div>
      <h1>Context API</h1>
      <hr />
      <h3>Characters</h3>
      <button onClick={() => addCharacter("Karin")}>Add</button>
      {characters.map((c) => (
        <p>{c}</p>
      ))}
      <hr />
      <h3>Todos</h3>
    </div>
  );
}

export default App;
