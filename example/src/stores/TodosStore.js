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
    fetch: (state) => (payload) => async () => {
      const responce = await axios
        .get(`https://jsonplaceholder.typicode.com/todos/1`)
        .then((res) => res.data.title);
      const newState = [...state, responce];
      return newState;
    },
    fail: (state) => (payload) => async () => {
      const responce = await axios
        .get(`https://💀jsonplaceholder.typicode.com/todos/2`)
        .then((res) => res.data.title);
      const newState = [...state, responce];
      return newState;
    },
  },
};

export { TodosStore };
