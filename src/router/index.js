import Vue from "vue";
import VueRouter from "vue-router";
import UserRegistration from "@/views/UserRegistration.vue";
import UserLogin from "@/views/UserLogin.vue";
import DashboardPhoneCaller from "@/views/DashboardPhoneCaller.vue";
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
    path: "/dashboard/phone_caller",
    name: "DashboardPhoneCaller",
    component: DashboardPhoneCaller
  },
  {
    path: "/patient/new",
    name: "PatientNew",
    component: PatientNew
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

export default router;
