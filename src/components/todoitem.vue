<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
        @change="toggleInput(todo)"
      />
      <strong>{{ todo.index + 1 }}</strong>
      {{ todo.title }}
    </span>

    <span>тут будет дата</span>

    <div class="btns_li">
      <v-btn
        @click="$emit('remove-todo', todo.id)"
        class="mx-2 delete"
        fab
        dark
        small
        color="primary"
      >
        <v-icon dark> mdi-delete </v-icon>
      </v-btn>
      <v-btn
        @click="$emit('edit-todo', todo.id)"
        class="mx-2 edit"
        fab
        dark
        large
        color="cyan"
      >
        <v-icon dark> mdi-pencil </v-icon>
      </v-btn>
    </div>
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
  // index: Number,
};
</script>

<style scoped>
li {
  align-items: center;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
.v-btn--fab.v-size--small,
.v-btn--fab.v-size--large {
  margin: 5px;
  width: 40px;
  height: 40px;
}
.theme--dark.v-btn.v-btn--has-bg.delete {
  background-color: #ff5a5a;
}
.theme--dark.v-btn.v-btn--has-bg.edit {
  background-color: #5a95ff;
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