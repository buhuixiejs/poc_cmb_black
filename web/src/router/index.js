import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
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
      path: "/block",
      name: "block",
      meta: {
        title: "区块"
      },
      component: () => import("@/views/block")
    },
    {
      path: "/all-block",
      name: "allBlock",
      meta: {
        title: "区块列表"
      },
      component: () => import("@/views/block/all-block")
    },
    {
      path: "/block-detail",
      name: "blockDetail",
      meta: {
        title: "区块"
      },
      component: () => import("@/views/block/block-detail")
    },
    {
      path: "/transaction",
      name: "transaction",
      meta: {
        title: "区块"
      },
      component: () => import("@/views/transaction")
    },
    {
      path: "/transaction-detail",
      name: "tansDetail",
      meta: {
        title: "区块"
      },
      component: () => import("@/views/transaction/transaction-detail")
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});