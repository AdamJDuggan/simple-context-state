# Simple-Context state

## Description

Enables quick setup and easy management of state in react applications.
Provides an in-build Errors store and Pending store (stores being blocks of state) which interact with the stores you create.
Uses Reacts Context API and does not rely on any third party dependencies.

## Install

```bash
    npm install
```

## Detailed guide

https://adamjduggan.github.io/demo-simple-context-state

## API

| Method               | Description                                     |
| -------------------- | ----------------------------------------------- |
| `<SimpleProvider/>`  | Provides state and actions to child components. |
| `useSimpleState()`   | Access actions and state from your stores.      |
| `useSimpleErrors()`  | Access the in-built errors stores.              |
| `useSimplePending()` | Access the in-built pending stores. components. |

## Guide

### 1. Create your own stores as basic objects with a name (string), initialState (any data type), actions (object of functions) and asyncActions (object of asynchronous functions).</h4>

```
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
```

### 2. Wrap a React component with SimpleProvider and pass your stores to it as an array.

```
import { SimpleProvider } from "simple-context-state"";

// Example with one provider for whole app (index.js file)
ReactDOM.render(
        <SimpleProvider component={<App />} stores={[TodosStore, AnotherStore]} />,
        document.getElementById("root")
);

// Example of using multiple providers in larger applications (App.js file or another component)
function App(){
  return (
    <SimpleProvider component={<Todos />} stores={[TodosStore]} />
    <SimpleProvider component={<Food />} stores={[FruitStore, VegtableStore]} />
  )
}
```

### 3. Access state and actions from your stores in components.

Here todos is the array state.todos.
`todos_add()` and `todos_fetch()` are the "add" and "fetch" actions created in the TodosStore.
Stores may have actions using the same name so we access actions with _storeName_actionName_.
The action `errors_reset()` is avalible globally and clears the errors store.

```
import { useSimpleState } from "../../simple-context-state"";

function TodosComponent(){

  const { todos, todos_add, todos_fetch, clear_errors } = useSimpleState();

  return (

    // todos is the state from the TodoStore
      {todos &amp;&amp; todos.map((t) =&gt; &lt;p&gt;{t}&lt;/p&gt;)}

    // Actions are accessed by storeName_actionName
    <button onClick={() => todos_add("Buy a bike")}>Add async</button>

    // Same for asyncActions
    <button onClick={() => todos_fetch()}>Get todo from API</button>

    // clear_errors is an in-built action which clears the errors store
    <button onClick={() => errors_clear()}>Clear Errors</button>
  );

}
```

### 4. Access the errors store and pending store with two simple hooks

Each SimpleProvider in your app exposes an errors store and pending store.
`asyncActions` are automatially wrapped in a pending state and errors state so at anytime you can see whether your asynchronous actions are loading, have resolved or have failed.
The `useSimpleErrors()` hook and `useSimplePending()` hook both
recieve an array of strings. Each string can be either the name
of a store or the name of a specific action in a store. If you
pass the name of a store the hook will return any/all actions in
that store which are pending (usePendingHook) or have failed
(useErrorsHook). If the string is the name of an action the
hooks will check if that action is in the pending or errors
store respectively.

```
// Will get all/any errors from the errors store
const errors = useSimpleErrors();

// This will get any actions from the products store and/or auth store which are pending
const pending = useSimplePending("auth", "products");

// Checks the errors store for to see if either/both of these actions from the auth store have failed
const errors = useSimpleErrors("auth_login", "products_get");
```
