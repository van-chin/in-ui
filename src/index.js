import Button from "./button";
import Select from "./select";
import RadioGroup from "./radio-group";
import Upload from "./upload";
import Form from "./form";
import Preview from "./preview";
import Table from "./table";

import "./styles/index.scss";

const components = {
  Button,
  Select,
  RadioGroup,
  Preview,
  Upload,
  Form,
  Table
};
const install = function(Vue, options = {}) {
  console.info(options);
  Object.keys(components).forEach(key => {
    console.log("key: ", key);
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

export default InUI;
