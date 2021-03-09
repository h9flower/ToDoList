<template>
  <div>
    <ul>
      <todoitem
        class="todo"
        v-for="(todo, index) in todos"
        v-bind:todo="{ ...todo, index }"
        v-bind:key="index"
        v-on:remove-todo="removeTodo"
        v-on:edit-todo="editTodo"
        v-on:togle-input="toggleInput"
      />
    </ul>
  </div>
</template>

<script>
import todoitem from "@/components/todoitem";
export default {
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
    editTodo(id) {
      this.$emit("set-current", id);
    },
    openModal() {},
    toggleInput(todo) {
      this.$emit("togle-input", todo);
    },
  },
  components: {
    todoitem,
  },
  props: ["todos"],
};
</script>

<style scoped>
.todo {
  margin: 0 auto;
  width: 80%;
}
</style>