const TodosStore = {
  name: "todos",
  initialState: ["Buy milk", "Start running", "Phone a friend"],
  actions: {
    add: (state) => (payload) => {
      const newState = [...state, payload];
      return newState;
    },
  },
  asyncActions: {
    addAsync: (state) => () => async () => {
      const responce = await fetch(
        `https://jsonplaceholder.typicode.com/todos/1`
      ).then((res) => res.json());
      const newState = [...state, responce.title];
      return newState;
    },
  },
};

export { TodosStore };