import React from "react";
import { useSimpleState } from "../simple-state";

function Errors() {
  const { errors_clear } = useSimpleState();

  return (
    <div className="errorsContainer">
      <div className="errorsComponent">
        <div onClick={() => errors_clear()} className="errorsCloseButton">
          X
        </div>
        <div className="errorsText">ERROR</div>
      </div>
    </div>
  );
}

export default Errors;
