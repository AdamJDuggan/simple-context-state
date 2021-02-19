<h1>Global state utility for react</h1>
<h3>Description</h3>
<p>Wraps React Context to provide quick setup and management of application state. All async actions get wrapped with a pending and errors state. A simple API which exposes 4 easy-to-use utilities. No need to learn redux, create reducers or waste time.</p>
<br/>
<h3>Install</h3>
<pre><code>npm i simple-context-state</code></pre>
<br/>
<h3>Example</h3>
<p>https://adamjduggan.github.io/simple-context-state-package</p>
<br/>
<h3>Guide</h3>
<br/>
<h4>1. Quickly create your own stores as basic objects</h4>
<p>Stores are simple objects with a name (string), initialState (any data type) and actions (object of functions). Note the different syntax of synchronous actions (add) and asynchronous actions (fetch).</p>
<pre><code>
const TodosStore = {
&nbsp;&nbsp;name: "todos",
&nbsp;&nbsp;initialState: ["Buy milk", "Start running", "Phone a friend"],
&nbsp;&nbsp;actions: {
&nbsp;&nbsp;&nbsp;&nbsp;add: (state) =&gt; (payload) =&gt; {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const newState = [...state, payload];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return newState;
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;fetch: (state) =&gt; (payload) =&gt; async () =&gt; {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const responce = await fetch(`https://...`);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const newState = [...state, responce];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return newState;
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;},
};
</code></pre>
<br/>
<h4>2. Wrap your root component (src/index.js) with SimpleProvider and pass it your stores as an array.</h4>
<pre><code>
import { SimpleProvider } from "simple-context-state";
<br/>
ReactDOM.render(
&nbsp;&nbsp;&lt;SimpleProvider component={&lt;App /&gt;} stores={[TodosStore, AnotherStore]} /&gt;,
&nbsp;&nbsp;document.getElementById("root")
);
</code></pre>
<br/>
<h4>3. Import actions and state into your components with useSimpleState()</h4>
<p>Here todos is the array state.todos. todos_add() and todos_fetch() are the "add" and "fetch" actions created in the TodosStore.</p> 
<p>Stores may have actions with the same name and we access actions with storeName_actionName.</p>
<p>The action errors_reset() is avalible globally and clears the errors store.</p>
<pre><code>
import { useSimpleState } from "simple-context-state";
<br/>
const { todos, todos_add, todos_fetch } = useSimpleState();
<br/>
return (
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{todos &amp;&amp; todos.map((t) =&gt; &lt;p&gt;{t}&lt;/p&gt;)}  
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={() =&gt; todos_add("Buy a bike")}&gt;Add async&lt;/button&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={() =&gt; todos_fetch()}&gt;Get todo from API&lt;/button&gt;  
);
</code></pre>
<br/>
<h4>4. Access the errors store and pending store with two simple hooks</h4>
<p>All actions are wrapped in a pending state and errors state so at anytime you can see which actions are loading, which have resolved and which have failed. useSimplePending() returns an array of action names. useSimpleErrors() returns an array of objects which each have a type and message.</p>
<pre><code>
// Get all errors from the errors store
const errors = useSimpleErrors();
<br/>
// Get all actions from the products store and auth store which are pending
const pending = useSimplePending("auth", "products");
<br/>
// Checks the errors store for these two actions
const errors = useSimpleErrors("auth_login", "products_get");
</code></pre>
