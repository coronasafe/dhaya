import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { AuthProvider } from "@/db.js";

import { firestorePlugin } from "vuefire";

import "@/assets/styles/tailwind.css";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);

AuthProvider.onAuthStateChanged(user => {
  store.dispatch("setUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
