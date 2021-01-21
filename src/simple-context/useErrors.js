import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const useErrors = (...actions) => {
  const { errors } = useContext(GlobalContext);
  const matchedErrors = [];
  if (!actions.length) {
    errors.map((error) => matchedErrors.push(error));
  } else {
    actions.map((action) => {
      if (!action.split("_")[1]) {
        errors.find((error) => {
          if (
            error.split("_")[0] === action.split("_")[0] &&
            !matchedErrors.includes(error)
          ) {
            matchedErrors.push(error);
          }
        });
      } else {
        errors.map((error) => {
          if (error === action && !matchedErrors.includes(error))
            matchedErrors.push(error);
        });
      }
    });
  }

  if (matchedErrors.length) return matchedErrors;
  else {
    return null;
  }
};

export default useErrors;
