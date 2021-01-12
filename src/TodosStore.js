const TodosStore = {
  name: "todos",
  initialState: ["Buy milk", "Start running", "Phone a friend"],
  actions: {
    addTodo: (state) => (payload) => {
      const newState = [...state, payload];
      return newState;
    },
  },
  asyncActions: {
    addTodoAsync: (state) => () => async () => {
      const responce = await fetch(
        "https://jsosnplaceholder.typicode.com/todos/1"
      ).then((res) => res.json());
      const newState = [...state, responce.title];
      return newState;
    },
  },
};

export { TodosStore };
