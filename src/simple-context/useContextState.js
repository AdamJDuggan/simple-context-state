import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function useContextState(...actions) {
  const state = useContext(GlobalContext);
  return state;
}

export default useContextState;
