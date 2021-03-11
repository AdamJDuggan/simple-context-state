const ConsolesStore = {
  name: "consoles",
  initialState: ["N64", "SNES", "PS1"],
  actions: {
    add: (state) => (payload) => async () => {
      const newState = [...state, payload];
      return newState;
    },
  },
};
export { ConsolesStore };
