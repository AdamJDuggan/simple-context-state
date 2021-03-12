# simple-context-state

Set up global state for your react app in minutes with this easy-to-use api.

Simple-context-state wraps Reacts Context API to provide quick setup and easy management of your application state. All asynchronous actions get wrapped with a pending and errors state so at at time you can see whether actions are loading, resolved or failed. A simple API which exposes 4 easy-to-use utilities. No redux, no reducers and minimal boilerplate.


Install:

npm i simple-context-state



Detailed guide:

https://adamjduggan.github.io/simple-context-state-package



Guide:

1. Quickly create your own stores as basic objects
Stores are simple objects with a name (string), initialState (any data type), actions (object of functions) and asyncActions (object of asynchronous functions).


const TodosStore = {
  name: "todos",
  initialState: ["Buy milk", "Start running", "Phone a friend"],
  actions: {
    add: (state) => (payload) => {
      const newState = [...state, payload];
      return newState;
    }
  },
  asyncActions: {
    fetch: (state) => (payload) => async () => {
      const responce = await fetch(`https://...`);
      const newState = [...state, responce];
      return newState;
    },
  },
};

2. Wrap your root component (src/index.js) with SimpleProvider and pass your stores to it as an array.

import { SimpleProvider } from "simple-context-state"";


ReactDOM.render(
  <SimpleProvider component={<App />} stores={[TodosStore, AnotherStore]} />,
  document.getElementById("root")
);

3. Import actions and state into your components with useSimpleState()
Here todos is the array state.todos.

todos_add() and todos_fetch() are the "add" and "fetch" actions created in the TodosStore.

Stores may have actions with the same name so we access actions with storeName_actionName.

The action errors_reset() is avalible globally and clears the errors store.


import { useSimpleState } from "../../simple-context-state"";


const { todos, todos_add, todos_fetch } = useSimpleState();


return (


    {todos && todos.map((t) => <p>{t}</p>)}  


    <button onClick={() => todos_add("Buy a bike")}>Add async</button>


    <button onClick={() => todos_fetch()}>Get todo from API</button>  
);

4. Access the errors store and pending store with two simple hooks
asyncActions are automatially wrapped in a pending state and errors state so at anytime you can see which actions are loading, which have resolved and which have failed.

Passing the name of a store with return all actions from that store. Passing the name of an action with check the store for that action

useSimplePending() returns an array of action names. useSimpleErrors() returns an array of objects which each have a type and message.


// Will get all/any errors from the errors store
const errors = useSimpleErrors();


// This will get all actions from the products store and/or auth store which are pending
const pending = useSimplePending("auth", "products");


// Checks the errors store for to see if either/both of these actions from the auth store have failed
const errors = useSimpleErrors("auth_login", "products_get");
