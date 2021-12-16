export const state = () => ({
    menuState: false,
});

export const mutations = {
  toogle(state) {
    state.menuState = !state.menuState;
  },
};
