import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import todos from "@/views/todos";
import editPage from "@/views/editPage";

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
    {
      path: "/editTask/:id",
      component: editPage,
    },
  ],
  mode: "history",
});
