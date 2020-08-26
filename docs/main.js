import Vue from "vue";

import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "./assets/test.scss";

import router from "./route.js";

Vue.use(ElementUI);

// import InUI from "@van-chin/in-ui";
import InUI from "../src/index.js";

// console.info(InUI);

Vue.use(InUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
