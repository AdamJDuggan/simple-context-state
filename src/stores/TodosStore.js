import axios from "axios";

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
    addAsync: (state) => (payload) => async () => {
      const responce = await axios
        .get(`https://jsonplaceholder.typicode.com/todos/1`)
        .then((res) => res.data.title);
      const newState = [...state, responce];
      return newState;
    },
    addAsyncError: (state) => (payload) => async () => {
      const responce = await axios
        .get(`https://djsonplaceholder.typicode.com/todos/1`, { timeout: 2000 })
        .then((res) => res.data.title);
      const newState = [...state, responce];
      return newState;
    },
  },
};

export { TodosStore };
