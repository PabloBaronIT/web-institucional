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

    component: () => import("../views/GobiernoView.vue"),
  },
  {
    path: "/ciudad",
    name: "ciudad",

    component: () => import("../views/CiudadView.vue"),
  },
  {
    path: "/noticias",
    name: "noticias",

    component: () => import("../views/NoticiasView.vue"),
  },
  {
    path: "/pueblo/historia",
    name: "historia",

    component: () => import("@/views/Historia/HistoriaView.vue"),
  },
  {
    path: "/pueblo/sacanta-hoy",
    name: "sacanta-hoy",

    component: () => import("../views/Hoy/SacantaHoyView.vue"),
  },
  {
    path: "/pueblo/descubri-sacanta",
    name: "descubri-sacanta",

    component: () => import("../views/Descubri/DescubriSacantaView.vue"),
  },
  {
    path: "/pueblo/fiesta-nacional",
    name: "fiesta-nacional",

    component: () => import("../views/Fiesta/FiestaNacionalView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
