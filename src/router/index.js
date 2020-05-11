import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";

import UserRegistration from "@/views/UserRegistration.vue";
import UserLogin from "@/views/UserLogin.vue";
import Dashboard from "@/views/Dashboard.vue";
import PatientNew from "@/views/PatientNew.vue";
import PatientView from "@/views/PatientView.vue";
import AppointmentView from "@/views/AppointmentView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/register"
  },
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
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/patient/new",
    name: "PatientNew",
    component: PatientNew,
    meta: {
      requireAuth: true,
      phoneCallerAuth: true,
      patientAuth: true,
      doctorAuth: false
    }
  },
  {
    path: "/patient/:id",
    name: "PatientView",
    component: PatientView
  },
  {
    path: "/appointment/:id",
    name: "AppointmentView",
    component: AppointmentView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!store.getters.isUserLoggedIn) {
      store.dispatch("raiseError", {
        error_message: "You don't have permission to access that page."
      });
      next({ name: "UserLogin" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
