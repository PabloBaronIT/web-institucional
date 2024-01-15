import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/gobierno",
    name: "gobierno",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GobiernoView.vue"),
  },
  {
    path: "/ciudad",
    name: "ciudad",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CiudadView.vue"),
  },
  {
    path: "/noticias",
    name: "noticias",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NoticiasView.vue"),
  },
  {
    path: "/pueblo/historia",
    name: "historia",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/Historia/HistoriaView.vue"
      ),
  },
  {
    path: "/pueblo/sacanta-hoy",
    name: "sacanta-hoy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Hoy/HistoriaView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
