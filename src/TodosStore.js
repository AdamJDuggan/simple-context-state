const TodosStore = {
  name: "todos",
  initialState: ["Buy milk", "Start running", "Take over the world"],
  actions: {
    addTodo: (state) => (payload) => {
      return { ...state, todos: [...state.todos, payload] };
    },
  },
  asyncActions: {
    addTodoAsync: (state) => () => async () => {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      ).then((res) => res.json());
      return { ...state, todos: [...state.todos, responce.title] };
    },
  },
};

export { TodosStore };
