import Todos from "./components/Todos";
import Consoles from "./components/Consoles";

import Pending from "./components/Pending";
import Errors from "./components/Errors";

function App() {
  return (
    <>
      <Pending />
      <Errors />
      <div className="container">
        <div className="header">Simple-Context-State</div>
        <Consoles />
        <Todos />
      </div>
    </>
  );
}

export default App;
