import Bulma from "bulma";
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  Bulma,
  render: h => h(App)
}).$mount("#app");
