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
      path: "*",
      redirect: "/login"
    }
  ]
});
