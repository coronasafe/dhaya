import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { AuthProvider } from "@/db.js";

import "@/assets/styles/tailwind.css";

Vue.config.productionTip = false;

AuthProvider.onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
