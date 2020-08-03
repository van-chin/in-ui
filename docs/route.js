import Vue from "vue";
import Router from "vue-router";

import Demo from "./views/Home.vue";
import Form from "./views/Form.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Demo
  },
  {
    path: "/form",
    name: "Form",
    component: Form
  }
];

const createRouter = () =>
  new Router({
    // mode: "history",
    base: process.env.BASE_URL,
    routes
  });

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // the relevant part
}

const router = createRouter();

export default router;
