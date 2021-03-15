<template>
  <li class="containerTask">
    <span v-bind:class="{ done: todo.completed }">
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
        @change="toggleInput(todo)"
      />

      <strong>{{ todo.index + 1 }}</strong>
      {{ todo.title }}

      <li class="subtask">
        <ul>
          <li v-for="todo in todo.subtodos" :key="todo.title">
            <input type="checkbox" v-bind:checked="todo.completed" />
            <strong>{{ todo.id }}</strong>
            {{ todo.title }}
          </li>
        </ul>
      </li>

      <li v-if="todo.description" class="description">
        Описание : {{ todo.description }}
      </li>
    </span>
    <div class="btns_li">
      <v-btn
        @click="removeTodo(todo.id)"
        class="mx-2 delete"
        fab
        dark
        small
        color="primary"
      >
        <v-icon dark> mdi-delete </v-icon>
      </v-btn>

      <v-btn @click="routerEdit" class="mx-2 edit" fab dark large color="cyan">
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
    routerEdit() {
      this.$router.push({ path: `/editTask/${this.todo.id}` });
      this.$store.dispatch("takeItem", this.todo.id);
    },

    removeTodo(todo) {
      this.$store.dispatch("removeTodo", todo);
    },

    toggleInput(todo) {
      this.$store.dispatch("toggleInput", todo.id);
    },
  },

  computed: {
    getSubTask() {
      this.$store.getters.getSubTask(this.item.id);
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}

.containerTask {
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
.containerTask {
  padding: 20px;
  position: relative;
}
.description {
  position: absolute;
  bottom: 9px;
  left: 67px;
  font-size: 14px;
  padding: 0;
  margin: 0;
}
.subtask {
  margin: 10px 0;
}
</style>