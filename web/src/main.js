import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import "@/plugins/element.js";
import "@/utils/filter";
import "@/utils/resize";

Vue.config.productionTip = false;
// styles
import "@/styles/index.styl";
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
