<h1>Global state utility for react</h1>
<h3>Description</h3>
<p>Set up global state for your react app in minutes with this easy-to-use api.</p>
<p>Simple-context-state wraps Reacts Context API to provide quick setup and easy management of your application state. All asynchronous actions get wrapped with a pending and errors state so at at time you can see whether actions are loading, resolved or failed. A simple API which exposes 4 easy-to-use utilities. No redux, no reducers and minimal boilerplate.</p>
<br/>
<h3>Install</h3>
<pre><code>npm i simple-context-state</code></pre>
<br/>
<h3>Detailed guide</h3>
<p>https://adamjduggan.github.io/simple-context-state-package</p>
<br/>
<h3>Guide</h3>
<br/>
<h4>1. Quickly create your own stores as basic objects</h4>
<p>Stores are simple objects with a name (string), initialState (any data type), actions (object of functions) and asyncActions (object of asynchronous functions).</p>
<pre><code>
const TodosStore = {
&nbsp;&nbsp;name: "todos",
&nbsp;&nbsp;initialState: ["Buy milk", "Start running", "Phone a friend"],
&nbsp;&nbsp;actions: {
&nbsp;&nbsp;&nbsp;&nbsp;add: (state) =&gt; (payload) =&gt; {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const newState = [...state, payload];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return newState;
<<<<<<< HEAD
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;},
&nbsp;&nbsp;asyncActions: {
=======
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;},
&nbsp;&nbsp;asyncActions:{
>>>>>>> 5d3e76dce7c96cfa139297a1f18dbd0557d8fc93
&nbsp;&nbsp;&nbsp;&nbsp;fetch: (state) =&gt; (payload) =&gt; async () =&gt; {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const responce = await fetch(`https://...`);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const newState = [...state, responce];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return newState;
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;}
};
</code></pre>

<br/>
<h4>2. Wrap your root component (src/index.js) with SimpleProvider and pass your stores to it as an array.</h4>
<pre><code>
import { SimpleProvider } from "simple-context-state"";
<br/>
ReactDOM.render(
&nbsp;&nbsp;&lt;SimpleProvider component={&lt;App /&gt;} stores={[TodosStore, AnotherStore]} /&gt;,
&nbsp;&nbsp;document.getElementById("root")
);
</code></pre>
<br/>
<h4>3. Import actions and state into your components with useSimpleState()</h4>
<p>Here todos is the array state.todos. </p>
<p>todos_add() and todos_fetch() are the "add" and "fetch" actions created in the TodosStore.</p> 
<p>Stores may have actions with the same name so we access actions with storeName_actionName.</p>
<p>The action errors_reset() is avalible globally and clears the errors store.</p>
<pre><code>
import { useSimpleState } from "../../simple-context-state"";
<br/>
const { todos, todos_add, todos_fetch } = useSimpleState();
<br/>
return (
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{todos &amp;&amp; todos.map((t) =&gt; &lt;p&gt;{t}&lt;/p&gt;)}  
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={() =&gt; todos_add("Buy a bike")}&gt;Add async&lt;/button&gt;
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={() =&gt; todos_fetch()}&gt;Get todo from API&lt;/button&gt;  
);
</code></pre>
<br/>
<h4>4. Access the errors store and pending store with two simple hooks</h4>
<p>asyncActions are automatially wrapped in a pending state and errors state so at anytime you can see which actions are loading, which have resolved and which have failed.</p>
<p>Passing the name of a store with return all actions from that store. Passing the name of an action with check the store for that action </p>
<p>useSimplePending() returns an array of action names. useSimpleErrors() returns an array of objects which each have a type and message.</p>
<pre><code>
// Will get all/any errors from the errors store
const errors = useSimpleErrors();
<br/>
// This will get all actions from the products store and/or auth store which are pending
const pending = useSimplePending("auth", "products");
<br/>
// Checks the errors store for to see if either/both of these actions from the auth store have failed
const errors = useSimpleErrors("auth_login", "products_get");
</code></pre>
