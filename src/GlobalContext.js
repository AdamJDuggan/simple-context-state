import React, { createContext, useReducer } from "react";
import { ContextDevTool } from "react-context-devtool";

// Initial state
let stores = {
  errors: [],
  pending: [],
};

// Provider component
export const GlobalProvider = ({ root }) => {
  const AppReducer = (state, action) => {
    if (action.type) return action.payload;
    else return state;
  };

  const [state, dispatch] = useReducer(AppReducer, stores);
  root.stores.map((store) => (stores[store.name] = store.initialState));

  const actions = {};
  root.stores.map((store) => {
    for (const [key, value] of Object.entries(store.actions)) {
      const action = value(state);
      const type = key.toString();
      actions[key] = (payload) => dispatch({ type, payload: action(payload) });
    }
  });
  const globalStore = {};
  for (const [key, value] of Object.entries(stores)) {
    globalStore[key] = state[key];
  }
  return (
    <GlobalContext.Provider
      value={{
        ...actions,
        ...globalStore,
      }}
    >
      {root.component}
      <ContextDevTool
        context={GlobalContext}
        id="uniqContextId"
        displayName="Context Display Name"
      />
    </GlobalContext.Provider>
  );
};

// Create context
export const GlobalContext = createContext(stores);
