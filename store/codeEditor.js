export const state = () => ({
    code: "",
});

export const mutations = {
  update(state, code) {
    state.code = code;
  },
};
