export default todos = {
  name: "todos",
  initialState: ["Buy milk", "Start running", "Take over the world"],
  actions: {
    addTodo: (state, action) => {
      const newState = { ...state, todos: [state.todos, action.payload] };
      return newState;
    },
  },
};
