<template>
  <div class="wrap">
    <div class="container">
      <addTodo
        class="addTodo"
        @add-todo="addTodo"
        @delete-selected="deleteSelectedIDs"
        :disableds="disabledBtn"
      />

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

    <ToDoList
      v-bind:todos="searchTodos"
      @remove-todo="removeTodo"
      @set-current="setCurrentTodo"
      @togle-input="toggleInput"
    />
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
      // showModal: false,
      selectedTodosIds: [],
      search: "",
    };
  },

  mounted() {
    this.$store.dispatch("fetchTodos");
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
    disabledBtn() {
      if (!this.selectedTodosIds.length) {
        return true;
      }
      return false;
    },
  },

  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
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
    toggleInput({ id, completed }) {
      const findId = this.selectedTodosIds.find(
        (selectedTodoId) => selectedTodoId === id
      );
      if (!findId) {
        this.selectedTodosIds.push(id);
      } else {
        this.selectedTodosIds = this.selectedTodosIds.filter(
          (selectedTodoId) => selectedTodoId !== id
        );
      }
      this.todos = this.todos.map((todoItem) => {
        if (todoItem.id == id) {
          todoItem.completed = !completed;
        }
        return todoItem;
      });
    },
    toggleModalState(showModal) {
      this.showModal = showModal;
    },
    deleteSelectedIDs() {
      this.todos = this.todos.filter(
        (todo) => !this.selectedTodosIds.includes(todo.id)
      );
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