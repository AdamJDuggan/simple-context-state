import React, { createContext, useReducer } from "react";
import { ContextDevTool } from "react-context-devtool";

// Initial state
const stores = {
  errors: [{ type: "auth_login", message: "Trouble logging in" }],
  pending: [],
};

/** PROVIDER CONTEXT */
export const SimpleProvider = ({ ...root }) => {
  //Reducer
  const AppReducer = (state, action) => {
    if (action.type) return action.payload;
    else return state;
  };

  //Configure the reducer
  const [state, dispatch] = useReducer(AppReducer, stores);

  //Add all user stores to the global array of stores
  root.stores.map((store) => (stores[store.name] = store.initialState));

  const addPending = (type) => {
    const newState = {
      ...state,
      pending: [...state.pending, type],
    };
    dispatch({
      type: `${type}/pending`,
      payload: newState,
    });
  };

  const removePending = (type) => {
    const newPending = state.pending.filter((item) => item !== type);
    const newState = {
      ...state,
      pending: newPending,
    };
    dispatch({ type: `${type}/removePending`, payload: newState });
  };

  const addError = (type, message) => {
    const exists = state.errors.find((error) => error.type === type);
    if (exists) {
      const existingErrors = state.errors.filter(
        (error) => error.type !== type
      );
      const newState = {
        ...state,
        errors: [...existingErrors, { type: type, message: message }],
      };
      dispatch({
        type: `${type}/error`,
        payload: newState,
      });
    } else {
      const newState = {
        ...state,
        errors: [...state.errors, { type: type, message: message }],
      };
      dispatch({
        type: `${type}/error`,
        payload: newState,
      });
    }
  };

  const removeError = (type) => {
    const exists = state.errors.find((error) => error.type === type);
    if (exists) {
      const newErrors = state.pending.filter((item) => item !== type);
      const newState = {
        ...state,
        pending: newErrors,
      };
      dispatch({ type: `${type}/removeError`, payload: newState });
    }
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
        const type = `${store.name}_${key}`;
        actions[type] = async (payload) => {
          const action = value(state[store.name]);
          addPending(type);
          try {
            const response = await action();
            const payload = await response();
            removePending(type);
            removeError(type);
            dispatch({ type, payload: { ...state, [store.name]: payload } });
          } catch (err) {
            removePending(type);
            if (!state.errors.includes(type)) addError(type, err.toString());
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
