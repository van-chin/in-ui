import Preview from "./preview.vue";

Preview.install = function(Vue) {
  Vue.component(Preview.name, Preview);
};

export default Preview;
