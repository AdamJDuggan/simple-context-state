import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const useErrors = (...actions) => {
  const { errors } = useContext(GlobalContext);
};

export default useErrors;
