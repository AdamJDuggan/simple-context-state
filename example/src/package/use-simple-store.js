import { useContext, useMemo } from "react";
import { GlobalContext } from "./use-simple-provider";

const useSimpleStore = (store) => {
  const state = useContext(GlobalContext);
  return state[store];
};

export default useSimpleStore;
