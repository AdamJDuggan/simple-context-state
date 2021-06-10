import React from "react";
import { useSimpleErrors } from "../../src/package";
import { useSimpleState } from "../../src/package";

function Errors() {
  const errors = useSimpleErrors();

  const { errors_clear } = useSimpleState();

  return errors ? (
    <div className="errorsContainer">
      <div className="errorsComponent">
        <strong onClick={() => errors_clear()} className="errorsCloseButton">
          X
        </strong>
        <div className="errorsText">ERROR </div>
        <p>
          <strong>Action: </strong>
          {errors[0].type}
        </p>
        <p>
          <strong>Server error: </strong>
          {errors[0].message}
        </p>
      </div>
    </div>
  ) : null;
}

export default Errors;
