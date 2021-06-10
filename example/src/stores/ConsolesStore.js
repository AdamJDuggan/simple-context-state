const ConsolesStore = {
  name: "consoles",
  initialState: ["Master System", "Mega Drive", "Saturn"],
  actions: {
    add: (state) => (payload) => {
      const newState = [...state, payload];
      return newState;
    },
  },
};
export default ConsolesStore;
