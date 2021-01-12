const ConsolesStore = {
  name: "consoles",
  initialState: ["N64", "SNES", "PS1"],
  actions: {
    addConsole: (state) => (payload) => {
      const newState = [...state, payload];
      return newState;
    },
  },
};
export { ConsolesStore };
