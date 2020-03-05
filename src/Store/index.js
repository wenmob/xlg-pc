import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app";
import power from "./modules/power";
import dict from "./modules/dict";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    power,
    dict
  }
});

export default store;
