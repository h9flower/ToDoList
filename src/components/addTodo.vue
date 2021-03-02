<template>
  <form @submit.prevent="onSubmit">
    <!-- <v-text-field :rules="rules" v-model="title"></v-text-field> -->
    <input type="text" v-model="title" />
    <v-btn @click="onSubmit" type="submit" class="mx-2" fab dark color="indigo">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <!-- <button type="submit">Create</button> -->
    <v-btn @click="deleteSelectedIDs" elevation="2">Удалить выделенное</v-btn>
    <!-- @click="$emit('remove-selected', id)"  -->
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          title: this.title,
          completed: false,
        };

        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    },
    deleteSelectedIDs() {
      this.$emit("delete-selected");
    },
  },
  props: {
    todos: Object,
  },
};
</script>

<style scoped>
input {
  border: 1px solid #000;
  padding: 5px;
}
</style>