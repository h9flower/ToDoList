<template>
  <div>
    <ul>
      <todoitem
        v-for="(todo, index) in todos"
        v-bind:todo="todo"
        :key="index"
        @remove-todo="removeTodo"
        @edit-todo="editTodo"
        @togle-input="toggleInput"
      />
    </ul>
  </div>
</template>

<script>
import todoitem from "@/components/todoitem";
export default {
  props: ["todos"],
  components: {
    todoitem,
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
    editTodo(id) {
      this.$emit("edit-todo", id);
    },
    openModal() {},
    toggleInput(todo) {
      this.$emit("togle-input", todo);
    },
  },
};
</script>

<style scoped>
</style>