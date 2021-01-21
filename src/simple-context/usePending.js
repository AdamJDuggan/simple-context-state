import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const usePending = (...actions) => {
  const { pending } = useContext(GlobalContext);
  const matchedPending = [];
  if (!actions.length) {
    pending.map((error) => matchedPending.push(error));
  } else {
    actions.map((action) => {
      if (!action.split("_")[1]) {
        pending.find((error) => {
          if (
            error.split("_")[0] === action.split("_")[0] &&
            !matchedPending.includes(error)
          ) {
            matchedPending.push(error);
          }
        });
      } else {
        pending.map((error) => {
          if (error === action && !matchedPending.includes(error))
            matchedPending.push(error);
        });
      }
    });
  }

  if (matchedPending.length) return matchedPending;
  else {
    return null;
  }
};

export default usePending;
