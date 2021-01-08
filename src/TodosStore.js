const TodosStore = {
  name: "todos",
  initialState: ["Buy milk", "Start running", "Take over the world"],
  actions: {
    addTodo: (state) => {
      return (payload) => {
        const newState = { ...state, todos: [...state.todos, payload] };
        return newState;
      };
    },
    addCharacter2: (state) => {
      return (payload) => {
        const newState = {
          ...state,
          characters: [...state.characters, payload],
        };
        return newState;
      };
    },
  },
};
export { TodosStore };
