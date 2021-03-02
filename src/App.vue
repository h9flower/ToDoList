<template>
  <div id="app">
    <h1>ToDo List</h1>
    <p>Kovalenko</p>
    <addTodo @add-todo="addTodo" @delete-selected="deleteSelectedIDs" />
    <modal
      :current-todo="currentTodo"
      v-if="showModal"
      @hide-modal="showModal = false"
    />
    <!-- @edit-todo="editTodo" -->
    <hr />
    <h3 v-if="!todos.length">Список задач пуст</h3>
    <ToDoList
      v-bind:todos="todos"
      @remove-todo="removeTodo"
      @edit-todo="setCurrentTodo"
      @togle-input="toggleInput"
    />

    <!-- @remove-selected="removeSelected" -->
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";
import addTodo from "@/components/addTodo";
import modal from "@/components/modal";
export default {
  name: "app",
  data() {
    return {
      todos: [],
      currentTodo: {},
      showModal: false,
      selectedTodosIds: [],
    };
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      todo.id = this.todos.length + 1;
      this.todos.push(todo);
    },
    setCurrentTodo(id) {
      this.currentTodo = this.todos.find((todo, i) => todo.id === id);
      this.showModal = true;
    },
    editTodo(updatedTodo) {
      this.showModal = false;

      this.todos = this.todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          todo = { ...updatedTodo };
        }

        return todo;
      });
    },
    toggleInput(todo) {
      //   this.selectedTodosIds.splice(todo.id);
      const findId = this.selectedTodosIds.find((id) => id === todo.id);
      if (!findId) {
        this.selectedTodosIds.push(todo.id);
      } else {
        this.selectedTodosIds = this.selectedTodosIds.filter(
          (id) => id !== todo.id
        );
      }
      this.todos = this.todos.map((todoItem) => {
        if (todoItem.id == todo.id) {
          todoItem.completed = !todo.completed;
        }
        return todoItem;
      });

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
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  position: relative;
}
</style>
