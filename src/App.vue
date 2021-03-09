<template>
  <div id="app">
    <div class="container">
      <h1>ToDo List</h1>
      <p>Kovalenko</p>

      <addTodo
        class="addTodo"
        @add-todo="addTodo"
        @delete-selected="deleteSelectedIDs"
        :disableds="disabledBtn"
      />

      <searchTask v-model="search" />
    </div>

    <modal
      :current-todo="currentTodo"
      v-if="showModal"
      @hide-modal="showModal = false"
      @edit-todo="editTodo"
    />

    <hr />
    <h3 v-if="!todos.length">Список задач пуст</h3>

    <ToDoList
      v-bind:todos="searchTodos"
      @remove-todo="removeTodo"
      @set-current="setCurrentTodo"
      @togle-input="toggleInput"
    />
    <router-view/>
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";
import addTodo from "@/components/addTodo";
import modal from "@/components/modal";
import searchTask from "@/components/searchTask";
export default {
  name: "app",
  data() {
    return {
      todos: [],
      currentTodo: {},
      showModal: false,
      selectedTodosIds: [],
      search: "",
    };
  },
  computed: {
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
    modal,
    searchTask,
  },
};
</script>

<style>
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
#app {
  height: 100vh;
  background: rgb(221, 221, 221);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  position: relative;
}
</style>
