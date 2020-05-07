import Vue from "vue";
import VueRouter from "vue-router";
import UserRegistration from "@/views/UserRegistration.vue";
import UserLogin from "@/views/UserLogin.vue";
import DashboardPhoneCaller from "@/views/DashboardPhoneCaller.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    name: "UserRegistration",
    component: UserRegistration
  },
  {
    path: "/login",
    name: "UserLogin",
    component: UserLogin
  },
  {
    path: "/phone_caller/dashboard",
    name: "DashboardPhoneCaller",
    component: DashboardPhoneCaller
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
