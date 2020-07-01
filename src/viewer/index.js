import Viewer from "./viewer.vue";

Viewer.install = function(Vue) {
  Vue.component(Viewer.name, Viewer);
};

export default Viewer;
