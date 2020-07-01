import Curd from "./curd.vue";

Curd.install = function(Vue) {
  Vue.component(Curd.name, Curd);
};

export default Curd;
