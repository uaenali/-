import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";
import insureinfo from "../views/insureInfo/index.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/insureinfo", name: "insureInfo", component: insureinfo },
  { path: "/list/:id", name: "list", component: () => import("../views/List") },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/Detail"),
  },
  { path: "*", name: "home", component: Home },
  // { path: '*', redirect: '/insureinfo' }
];

const router = new VueRouter({
  routes,
});

export default router;
