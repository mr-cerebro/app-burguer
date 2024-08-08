import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: () => import("../views/Pedidos.vue"),
    meta: {
      title: "Pedidos",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "Default Title";
});

export default router;
