import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/Index.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import Mainpang from "../views/Mainpang.vue";
import PageSearch from "../views/PageSearch.vue";
import _id from "../views/pagecompany/_id.vue";
import PageMember from "../views/PageMember.vue";
import PageLogin from "../views/PageLogin.vue";
import PageCompanyLG from "../views/Company/PageCompanyLG.vue";
import PageF from "../views/PageUser/PageF.vue";
import PageHTR from "../views/PageUser/PageHTR.vue";
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "*",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
  {
    path: "/_id/:id",
    name: "_id",
    component: _id,
  },
  {
    path: "/PageF",
    name: "PageF",
    component: PageF,
  },
  {
    path: "/PageHTR",
    name: "PageHTR",
    component: PageHTR,
  },
  {
    path: "/PageCompanyLG",
    name: "PageCompanyLG",
    component: PageCompanyLG,
  },
  {
    path: "/PageMember",
    name: "PageMember",
    component: PageMember,
  },
  {
    path: "/PageLogin",
    name: "PageLogin",
    component: PageLogin,
  },
  {
    path: "/Mainpang",
    name: "Mainpang",
    component: Mainpang,
  },
  {
    path: "/PageSearch",
    name: "PageSearch",
    component: PageSearch,
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
  routes,
});

export default router;
// * ผาดมั่วที่ไม่ได้กำหน่ด
// / ไม่พิมอะไรมาหรือพิม / ครั้งเดียว
