import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import LoginView from "../pages/LoginView.vue";
import RegisterView from "../pages/RegisterView.vue";
import DashBoardView from "../pages/DashBoardView.vue";
const routes = [
  {
    path: "/",
    name: "root",
    component: App,
  },
  {
    path: "/auth",
    name: "root",
    component: LoginView,
  },

  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoardView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
