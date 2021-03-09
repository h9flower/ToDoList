import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import todos from "@/views/todos";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      component: Home,
    },
    {
      path: "/todolist",
      component: todos,
    },
  ],
  mode: "history",
});
