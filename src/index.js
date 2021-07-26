import Button from "./button";
import Select from "./select";
import RadioGroup from "./radio-group";
import Upload from "./upload";
import Form from "./form";
import Preview from "./preview";
import Table from "./table";
import Curd from "./curd";
import Viewer from "./viewer";
import Split from "./split";

import events from "./directives/events";

import "./styles/index.scss";
import Message from "element-ui/packages/message";

const components = {
  Button,
  Select,
  RadioGroup,
  Preview,
  Upload,
  Form,
  Table,
  Curd,
  Viewer,
  Split
};
const install = function(Vue, options = {}) {
  // console.info(options);
  Vue.directive("events", events);
  Object.keys(components).forEach(key => {
    // console.log("key: ", key);
    Vue.component(components[key].name, components[key]);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const InUI = {
  version: process.env.VUE_APP_VERSION, // eslint-disable-line no-undef
  install,
  ...components
};
// console.info("inUi", InUI);
export default InUI;
