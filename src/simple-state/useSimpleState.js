import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function useSimpleState(...actions) {
  const state = useContext(GlobalContext);
  return state;
}

export default useSimpleState;
