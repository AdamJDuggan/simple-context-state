import React from "react";
import { useSimplePending } from "../../src/package";

function Pending() {
  const pending = useSimplePending();
  return pending ? <div className="pendingComponent">Loading</div> : null;
}

export default Pending;
