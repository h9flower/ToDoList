<template>
  <div>
    <ul>
      <todoitem
        class="todo"
        v-for="(todo, index) in todos"
        v-bind:todo="{ ...todo, index }"
        v-bind:key="index"
        v-on:edit-todo="editTodo"
      />
    </ul>
  </div>
</template>

<script>
import todoitem from "@/components/todoitem";
export default {
  methods: {
    editTodo(id) {
      this.$emit("set-current", id);
    },

    openModal() {},
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