import React, { createContext, useReducer } from "react";
import { ContextDevTool } from "react-context-devtool";

const AppReducer = (state, action) => {
  if (action.type === "character/add") return action.payload;
};

// Initial state
const initialState = {
  characters: ["Ryu", "Blanka", "ChunLi"],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function addCharacter(character) {
    const newState = { ...state, characters: [...state.characters, character] };
    dispatch({
      type: "character/add",
      payload: newState,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        characters: state.characters,
        addCharacter,
      }}
    >
      {children}
      <ContextDevTool
        context={GlobalContext}
        id="uniqContextId"
        displayName="Context Display Name"
      />
    </GlobalContext.Provider>
  );
};
