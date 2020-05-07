import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const SET_ERROR = "SET_ERROR";

export default new Vuex.Store({
  state: {
    error_message: ""
  },
  mutations: {
    [SET_ERROR](state, payload) {
      state.error_message = payload.error_message;
    }
  },
  actions: {
    raiseError(context, error_message) {
      context.commit(SET_ERROR, error_message);
    },
    dismissError(context) {
      context.commit(SET_ERROR, "");
    }
  },
  modules: {}
});
