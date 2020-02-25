import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Layout from "@/ReuseComponents/layout";

const drouter = [
  {
    path: "/layout",
    name: "layout",
    component: Layout,
    children: []
  },
  {
    // 404
    path: "/404",
    name: "404",
    component: () => import("@/Pages/404"),
    meta: {
      noTag: true,
      title: "404",
      icon: ""
    }
  }
];

// 向外部跑出router
export default new Router({
  // mode: "history", //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: drouter
});
