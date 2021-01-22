import React, { useContext } from "react";
import { GlobalContext } from "./use-simple-provider";

function useSimpleState(...actions) {
  const state = useContext(GlobalContext);
  return state;
}

export default useSimpleState;
