import React, { createContext, useReducer } from "react";
import { ContextDevTool } from "react-context-devtool";

// Initial state
const stores = {
  errors: [
    // "auth_login",
    // "auth_getProfile",
    // "consoles_remove",
    // "products_delete",
  ],
  pending: [],
};

/** PROVIDER CONTEXT */
export const Provider = ({ ...root }) => {
  //Reducer
  const AppReducer = (state, action) => {
    if (action.type) return action.payload;
    else return state;
  };

  //Configure the reducer
  const [state, dispatch] = useReducer(AppReducer, stores);

  //Add all user stores to the global array of stores
  root.stores.map((store) => (stores[store.name] = store.initialState));

  const addPending = (action) => {
    const newState = {
      ...state,
      pending: [...state.pending, action],
    };
    dispatch({
      type: action,
      payload: newState,
    });
  };

  const removePending = (action) => {
    const newPending = state.pending.filter((item) => item !== action);
    const newState = {
      ...state,
      pending: newPending,
    };
    dispatch({ type: `pending/addTodo`, payload: newState });
  };

  const addError = (action) => {
    const newState = {
      ...state,
      errors: [...state.errors, action],
    };
    dispatch({
      type: `pending/addTodo`,
      payload: newState,
    });
  };

  //Creat an object to which we will add all user actions
  const actions = {};

  //Map through the users stores
  root.stores.map((store) => {
    if (store.actions) {
      // Find the array of actions in that store
      for (const [key, value] of Object.entries(store.actions)) {
        //Pass it the global state
        const action = value(state[store.name]);
        //Create string of the action name (to be shown as "type" in the reducer)
        const type = `${store.name}_${key}`;
        //Add this action to the array actions, its callback sends the newState (payload) to the reducer
        actions[type] = (payload) =>
          dispatch({
            type,
            payload: { ...state, [store.name]: action(payload) },
          });
      }
    }
    if (store.asyncActions) {
      //Find the array of async actions in that store
      for (const [key, value] of Object.entries(store.asyncActions)) {
        //Create string of the action name (to be shown as "type" in the reducer)
        const type = `${store.name}_${key}_async`;
        actions[type] = async () => {
          const action = value(state[store.name]);
          addPending(type);
          try {
            const response = await action();
            const payload = await response();
            removePending(type);
            dispatch({ type, payload: { ...state, [store.name]: payload } });
          } catch (err) {
            removePending(type);
            if (!state.errors.includes(type)) addError(type, err);
          }
        };
      }
    }
  });

  //Create an array which will be an object of each store and its state
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
