import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

// import InUI from "../lib/in-ui.common.js";
import InUI from "../src/index.js";

console.info(InUI);

Vue.use(InUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
