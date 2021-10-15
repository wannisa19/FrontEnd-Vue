import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";

// Make vue aware of Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
  },
});
