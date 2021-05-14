import React, { useContext } from "react";
import { GlobalContext } from "./use-simple-provider";

const useSimplePending = (...actions) => {
  const { pending } = useContext(GlobalContext);
  const matchedPending = [];
  if (!actions.length) {
    pending.map((pendingAction) => matchedPending.push(pendingAction));
  } else {
    actions.map((action) => {
      if (!action.split("_")[1]) {
        pending.find((pendingAction) => {
          if (
            pendingAction.split("_")[0] === action.split("_")[0] &&
            !matchedPending.includes(pendingAction)
          ) {
            matchedPending.push(pendingAction);
          }
        });
      } else {
        pending.map((pendingAction) => {
          if (
            pendingAction === action &&
            !matchedPending.includes(pendingAction)
          )
            matchedPending.push(pendingAction);
        });
      }
    });
  }

  if (matchedPending.length) return matchedPending;
  else {
    return null;
  }
};

export default useSimplePending;
