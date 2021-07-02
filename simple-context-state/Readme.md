<h1>Global state utility for react</h1>
<h3>Description</h3>
<p>Enables quick setup and easy management of state in react applications.</p>
<p>Provides an in-build Errors store and Pending store (stores being blocks of state) which interact with the stores you create.</p>
<p>Uses Reacts Context API and does not rely on any third party dependencies.
</p>
<br/>
<h3>Install</h3>
<pre><code>npm i simple-context-state</code></pre>
<br/>
<h3>Detailed guide</h3>
<p>https://adamjduggan.github.io/demo-simple-context-state-package</p>
<br/>
<h3>API</h3>
    <table>
        <tbody>
          <tr>
            <td>
              &lt;SimpleProvider /&gt;
            </td>
            <td>
              Provides state and actions to child components.
            </td>
          </tr>
          <tr>
            <td>
              useSimpleState()
            </td>
            <td>
              Access actions and state from your stores.
            </td>
          </tr>
          <tr>
            <td>
              useSimpleErrors()
            </td>
            <td>
              Access the in-built errors stores.
            </td>
          </tr>
          <tr>
            <td>
              useSimplePending()
            </td>
            <td>
              Access the in-built errors stores.
            </td>
          </tr>
        </tbody>
      </table>
  
<h3>Guide</h3>
<br/>
<h4>1. Create your own stores as basic objects with a name (string), initialState (any data type), actions (object of functions) and asyncActions (object of asynchronous functions).</h4>
<pre><code>
const TodosStore = {
&nbsp;&nbsp;name: "todos",
&nbsp;&nbsp;initialState: ["Buy milk", "Start running", "Phone a friend"],
&nbsp;&nbsp;actions: {
&nbsp;&nbsp;&nbsp;&nbsp;add: (state) =&gt; (payload) =&gt; {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const newState = [...state, payload];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return newState;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;},
&nbsp;&nbsp;asyncActions: {
&nbsp;&nbsp;&nbsp;&nbsp;fetch: (state) =&gt; (payload) =&gt; async () =&gt; {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const responce = await fetch(`https://...`);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const newState = [...state, responce];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return newState;
&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;},
};
</code></pre>

<br/>
<h4>2. 
Wrap a React component with SimpleProvider and pass your stores to it as an array.</h4>
<pre><code>
import { SimpleProvider } from "simple-context-state"";
<br/>
<br/>
// Example with one provider for whole app (index.js file)
<br/>
ReactDOM.render(
&nbsp;&nbsp;&lt;SimpleProvider component={&lt;App /&gt;} stores={[TodosStore, AnotherStore]} /&gt;,
&nbsp;&nbsp;document.getElementById("root")
);
<br/>
<br/>
// Example of using multiple providers in larger applications (App.js file)
<br/>
function App(){
&nbsp;return (
&nbsp;&nbsp;&lt;SimpleProvider component={&lt;Todos /&gt;} stores={[TodosStore]} /&gt;
&nbsp;&nbsp;&lt;SimpleProvider component={&lt;Food /&gt;} stores={[FruitStore, VegtableStore]} /&gt;
)

}

</code></pre>
<br/>
<h4>3. Access state and actions from your stores in components.</h4>
<p>Here todos is the array state.todos. </p>
<p>todos_add() and todos_fetch() are the "add" and "fetch" actions created in the TodosStore.</p> 
<p>Stores may have actions using the same name so we access actions with storeName_actionName.</p>
<p>The action errors_reset() is avalible globally and clears the errors store.</p>
<pre><code>
import { useSimpleState } from "../../simple-context-state"";

<br/>
function TodosComponent(){
<br/>
const { todos, todos_add, todos_fetch } = useSimpleState();
<br/>
return (
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;// todos is the state from the TodoStore  
&nbsp;&nbsp;&nbsp;&nbsp;{todos &amp;&amp; todos.map((t) =&gt; &lt;p&gt;{t}&lt;/p&gt;)}  
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;// Actions are accessed by storeName_actionName
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={() =&gt; todos_add("Buy a bike")}&gt;Add async&lt;/button&gt;
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;// Same for asyncActions
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={() =&gt; todos_fetch()}&gt;Get todo from API&lt;/button&gt; 
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;// clear_errors is an in-built action which clears the errors store
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={() =&gt; errors_clear()}&gt;Clear Errors&lt;/button&gt; 
<br/> 
&nbsp;);
<br/>
}

</code></pre>
<br/>
<h4>4. Access the errors store and pending store with two simple hooks</h4>
<p>Each SimpleProvider in your app exposes an errors store and pending store.</p>
<p>asyncActions are automatially wrapped in a pending state and errors state so at anytime you can see whether your asynchronous actions are loading, have resolved or have failed.</p>
<p> The useSimpleErrors() hook and useSimplePending() hook both
recieve an array of strings. Each string can be either the name
of a store or the name of a specific action in a store. If you
pass the name of a store the hook will return any/all actions in
that store which are pending (usePendingHook) or have failed
(useErrorsHook). If the string is the name of an action the
hooks will check if that action is in the pending or errors
store respectively. </p>
<pre><code>
// Will get all/any errors from the errors store
const errors = useSimpleErrors();
<br/>
// This will get any actions from the products store and/or auth store which are pending
const pending = useSimplePending("auth", "products");
<br/>
// Checks the errors store for to see if either/both of these actions from the auth store have failed
const errors = useSimpleErrors("auth_login", "products_get");
</code></pre>
<br/>
