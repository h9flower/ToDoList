<template>
  <div class="wrap">
    <div class="container">
      <addTodo class="addTodo" />
      <!-- @add-todo="addTodo" -->

      <searchTask v-model="search" />
    </div>

    <!-- <modal
      v-bind:current-todo="currentTodo"
      v-if="showModal"
      v-on:hide-modal="showModal = false"
      v-on:edit-todo="editTodo"
    /> -->

    <hr />
    <h3 v-if="!todos.length">Список задач пуст</h3>

    <ToDoList v-bind:todos="searchTodos" @set-current="setCurrentTodo" />

    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ToDoList from "@/components/ToDoList";
import addTodo from "@/components/addTodo";
// import modal from "@/components/modal";
import searchTask from "@/components/searchTask";
export default {
  name: "app",
  data() {
    return {
      currentTodo: {},
      search: "",
    };
  },

  mounted() {
    // this.$store.dispatch("fetchTodos");
  },

  computed: {
    ...mapGetters(["todos"]),

    searchTodos() {
      if (this.search) {
        return this.todos
          .map((todo) => ({ ...todo, title: todo.title.toLowerCase() }))
          .filter((todo) => {
            return todo.title.includes(this.search.toLowerCase());
          });
      }
      return this.todos;
    },
  },

  methods: {
    setCurrentTodo(id) {
      this.currentTodo = this.todos.find((todo, i) => todo.id === id);
      this.toggleModalState(true);
    },

    editTodo(updatedTodo) {
      this.toggleModalState(false);

      this.todos = this.todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          todo = { ...updatedTodo };
        }
        return todo;
      });
    },

    toggleModalState(showModal) {
      this.showModal = showModal;
    },
  },
  components: {
    ToDoList,
    addTodo,
    // modal,
    searchTask,
  },
};
</script>

<style scoped>
.wrap {
  padding-top: 100px;
  top: 0;
  height: 100vh;
  background: #d0fbfd;
  margin-top: 0px;
  position: absolute;
  width: 100vw;
}
.container {
  width: 50%;
  margin: 0 auto;
}
p {
  margin-top: 10px;
}
.addTodo {
  margin-top: 20px;
}
hr {
  margin: 20px 0;
}
</style>