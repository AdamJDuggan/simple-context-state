npm utility to quickly set up your own stores which get append to a pre-configured global store. All async actions get a pending, succcss and errors state appended to them which can be tracked with useSelector() hooks.  


Easily set up your own stores like this...
const TodosStore = {
  name: "todos",
  initialState: ["Buy milk", "Start running", "Take over the world"],
  actions: {
    addTodo: (state) => (payload) => {
      const newState = [...state, payload];
      return newState;
    },
  },
  asyncActions: {
    addTodoAsync: (state) => () => async () => {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      ).then((res) => res.json());
      const newState = [...state, responce.title];
      return newState;
    },
  },
};

export { TodosStore };





And append those stores to your root file like this...

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalProvider } from "./GlobalContext";
import { TodosStore } from "./TodosStore";
import { ConsolesStore } from "./ConsolesStore";

ReactDOM.render(
  <GlobalProvider
    root={{ component: <App />, stores: [TodosStore, ConsolesStore] }}
  />,
  document.getElementById("root")
);



The utility does the rest for you
