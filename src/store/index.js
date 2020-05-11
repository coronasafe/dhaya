import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const SET_ERROR = "SET_ERROR";
const SET_SUCCESS = "SET_SUCCESS";
const SET_USER = "SET_USER";

export default new Vuex.Store({
  state: {
    error_message: "",
    success_message: "",
    current_user: null
  },
  getters: {
    isUserLoggedIn(state) {
      return state.current_user !== null;
    }
  },
  mutations: {
    [SET_ERROR](state, payload) {
      state.error_message = payload.error_message;
    },
    [SET_SUCCESS](state, payload) {
      state.success_message = payload.success_message;
    },
    [SET_USER](state, payload) {
      state.current_user = payload.user;
    }
  },
  actions: {
    raiseError(context, error_message) {
      context.dispatch("dismissSuccess");
      context.commit(SET_ERROR, error_message);
    },
    dismissError(context) {
      context.commit(SET_ERROR, "");
    },
    raiseSuccess(context, success_message) {
      context.dispatch("dismissError");
      context.commit(SET_SUCCESS, success_message);
    },
    dismissSuccess(context) {
      context.commit(SET_SUCCESS, "");
    },
    setUser(context, user) {
      context.commit(SET_USER, { user: user });
    }
  },
  modules: {}
});
