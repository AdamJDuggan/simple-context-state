const ConsolesStore = {
  name: "consoles",
  initialState: ["N64", "SNES", "PS1"],
  actions: {
    addConsole: (state) => {
      return (payload) => {
        const newState = {
          ...state,
          consoles: [...state.consoles, payload],
        };
        return newState;
      };
    },
  },
  asyncActions: {},
};
export { ConsolesStore };
