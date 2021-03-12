<template>
  <v-btn
    :disabled="$store.state.todo.todos.length === 0"
    @click="deleteAll"
    elevation="2"
    >Удалить Все</v-btn
  >
</template>

<script>
export default {
  methods: {
    deleteAll() {
      this.$store.commit("deleteAll");
    },
  },
};
</script>

<style scoped>
</style>