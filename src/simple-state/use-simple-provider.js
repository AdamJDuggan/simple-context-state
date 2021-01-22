import React, { createContext, useReducer } from "react";
import { ContextDevTool } from "react-context-devtool";

// Initial state
const stores = {
  errors: [],
  pending: [],
};

/** PROVIDER CONTEXT */
export const SimpleProvider = ({ ...root }) => {
  const AppReducer = (state, action) => {
    if (action.type) return action.payload;
    else return state;
  };

  const [state, dispatch] = useReducer(AppReducer, stores);

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
  const addError = (type, message) => {
    const newState = {
      ...state,
      errors: [...state.errors, { type, message: message.toString() }],
    };
    dispatch({
      type: `${type}/pending`,
      payload: newState,
    });
  };

  const dispatchAction = (type, store, payload) => {
    const errors = state.errors.filter((error) => error.type !== type);
    const pending = state.pending.filter((action) => action !== type);
    dispatch({
      type,
      payload: {
        ...state,
        errors,
        pending,
        [store.name]: payload,
      },
    });
  };

  const actions = {};

  root.stores.map((store) => {
    if (store.actions) {
      for (const [key, value] of Object.entries(store.actions)) {
        const action = value(state[store.name]);
        const type = `${store.name}_${key}`;
        actions[type] = (payload) =>
          dispatch({
            type,
            payload: { ...state, [store.name]: action(payload) },
          });
      }
    }
    if (store.asyncActions) {
      for (const [key, value] of Object.entries(store.asyncActions)) {
        const type = `${store.name}_${key}`;
        actions[type] = async (data) => {
          const action = value(state[store.name]);
          addPending(type);
          try {
            const response = await action(data);
            const payload = await response();
            dispatchAction(type, store, payload);
          } catch (err) {
            console.log(err);
            addError(type, err);
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
        id="simpleState"
        displayName="Simple State"
      />
    </GlobalContext.Provider>
  );
};

// Create context
export const GlobalContext = createContext(stores);
