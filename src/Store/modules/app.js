const app = {
  state: {
    itemActive: "home", // 左边菜单的状态控制
    itemName: "首页",
    tagActive: "home",
    routArr: [],
    tagView: []
  },
  mutations: {
    setItemActive(state, log) {
      state.itemActive = log;
    },
    setItemName(state, log) {
      state.itemName = log;
    },
    setRoutArr(state, log) {
      state.routArr = log;
    },
    setTagActive(state, log) {
      state.tagActive = log;
    },
    setTagView(state, log) {
      const arr = state.tagView;
      const names = [];
      arr.forEach(ele => {
        names.push(ele.name);
      });
      if (names.includes(log.name)) {
        // 什么也不做
      } else {
        log.meta.show = false;
        arr.push(log);
      }
      state.tagView = arr;
    },
    delTagView(state, log) {
      const arr = state.tagView;
      const index = arr.findIndex(ele => {
        return ele.name === log.name;
      });
      arr.splice(index, 1);
      state.tagView = arr;
    }
  },
  actions: {
    setItemActive({ commit }, log) {
      commit("setItemActive", log);
    },
    setItemName({ commit }, log) {
      commit("setItemName", log);
    },
    setTagActive({ commit }, log) {
      commit("setTagActive", log);
    },
    setRoutArr({ commit }, log) {
      commit("setRoutArr", log);
    },
    setTagView({ commit }, log) {
      commit("setTagView", log);
    },
    delTagView({ commit }, log) {
      commit("delTagView", log);
    }
  },
  getters: {
    getItemActive(state) {
      return state.itemActive;
    },
    getItemName(state) {
      return state.itemName;
    },
    getRoutArr(state) {
      return state.routArr;
    },
    getTagView(state) {
      return state.tagView;
    },
    getTagActive(state) {
      return state.tagActive;
    }
  }
};

export default app;
