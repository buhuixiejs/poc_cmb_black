import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录"
      },
      component: () => import("@/views/login")
    },
    {
      path: "/home",
      name: "home",
      meta: {
        title: "首页"
      },
      component: () => import("@/views/home")
    },
    {
      path: "/user",
      name: "user",
      meta: {
        title: "用户管理"
      },
      component: () => import("@/views/user")
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});
