Global state utility for react
Description
Wraps React Context to provide quick setup and management of application state. All async actions get wrapped with a pending and errors state. A simple API which exposes 4 easy-to-use utilities. No need to learn redux, create reducers or waste time.


Install
npm i simple-context-state

Example
https://adamjduggan.github.io/simple-context-state-package


Guide

1. Quickly create your own stores as basic objects
Stores are simple objects with a name (string), initialState (any data type) and actions (object of functions). Note the different syntax of synchronous actions (add) and asynchronous actions (fetch).


const TodosStore = {
  name: "todos",
  initialState: ["Buy milk", "Start running", "Phone a friend"],
  actions: {
    add: (state) => (payload) => {
      const newState = [...state, payload];
      return newState;
    },
  },
  asyncActions:{
    fetch: (state) => (payload) => async () => {
      const responce = await fetch(`https://...`);
      const newState = [...state, responce];
      return newState;
    },
  }
};

2. Wrap your root component (src/index.js) with SimpleProvider and pass it your stores as an array.

import { SimpleProvider } from "../../simple-context-state"";

ReactDOM.render(
  <SimpleProvider component={<App />} stores={[TodosStore, AnotherStore]} />,
  document.getElementById("root")
);

3. Import actions and state into your components with useSimpleState()
Here todos is the array state.todos. todos_add() and todos_fetch() are the "add" and "fetch" actions created in the TodosStore.

Stores may have actions with the same name and we access actions with storeName_actionName.

The action errors_reset() is avalible globally and clears the errors store.


import { useSimpleState } from "../../simple-context-state"";

const { todos, todos_add, todos_fetch } = useSimpleState();

return (

    {todos && todos.map((t) => <p>{t}</p>)}  

    <button onClick={() => todos_add("Buy a bike")}>Add async</button>

    <button onClick={() => todos_fetch()}>Get todo from API</button>  
);

4. Access the errors store and pending store with two simple hooks
All actions are wrapped in a pending state and errors state so at anytime you can see which actions are loading, which have resolved and which have failed. useSimplePending() returns an array of action names. useSimpleErrors() returns an array of objects which each have a type and message.


// Will get all errors from the errors store
const errors = useSimpleErrors();

// Get all actions from the products store and auth store which are pending
const pending = useSimplePending("auth", "products");

// Checks the errors store for these two actions from the auth store
const errors = useSimpleErrors("auth_login", "products_get");
