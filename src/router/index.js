import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import LoginView from "../pages/LoginView.vue";

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
