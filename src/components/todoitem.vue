<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input type="checkbox" @change="toggleInput(todo)" />
      <strong>{{ todo.id }}</strong>
      {{ todo.title }}
    </span>

    <v-btn
      @click="$emit('remove-todo', todo.id)"
      class="mx-2"
      fab
      dark
      small
      color="primary"
    >
      <v-icon dark> mdi-delete </v-icon>
    </v-btn>
    <!-- <button  class="btn-close" @click="$emit('remove-todo', todo.id)">
      &times;
    </button> -->
    <v-btn
      @click="$emit('edit-todo', todo.id)"
      class="mx-2"
      fab
      dark
      large
      color="cyan"
    >
      <v-icon dark> mdi-pencil </v-icon>
    </v-btn>
    <!-- <button @click="$emit('edit-todo', todo.id)">Edit</button> -->
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleInput(todo) {
      this.$emit("togle-input", todo);
    },
  },
  index: Number,
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.btn-close {
  background: red;
  color: #fff;
  border-radius: 50%;
  border: 0;
  font-weight: bold;
}

.done {
  text-decoration: line-through;
}
input {
  margin-right: 1rem;
}
</style>