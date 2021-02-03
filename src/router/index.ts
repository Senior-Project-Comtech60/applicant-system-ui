import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/Index.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import Mainpang from "../views/Mainpang.vue";
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "*",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
  {
    path: "/Mainpang",
    name: "Mainpang",
    component: Mainpang,
  },
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
// * ผาดมั่วที่ไม่ได้กำหน่ด
// / ไม่พิมอะไรมาหรือพิม / ครั้งเดียว
