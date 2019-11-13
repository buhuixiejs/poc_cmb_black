import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import "@/utils/filter";
import "@/utils/resize";
import "@/plugins/element.js";

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
