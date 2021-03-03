<template>
  <div>
    <ul>
      <todoitem
        class="qqq"
        v-for="(todo, index) in todos"
        v-bind:todo="{ ...todo, index }"
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
      this.$emit("set-current", id);
    },
    openModal() {},
    toggleInput(todo) {
      this.$emit("togle-input", todo);
    },
  },
};
</script>

<style scoped>
.qqq {
  margin: 0 auto;
  width: 80%;
}
</style>