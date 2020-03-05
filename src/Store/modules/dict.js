const dict = {
  state: {
    dict: {}
  },
  mutations: {
    setDict(state, log) {
      state.dict = log;
    }
  },
  actions: {
    setDict({ commit }, log) {
      commit("setDict", log);
    }
  },
  getters: {
    getDict(state) {
      return state.dict;
    }
  }
};

export default dict;
