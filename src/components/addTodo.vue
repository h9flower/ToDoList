<template>
  <form @submit.prevent="addTask">
    <div class="wrap">
      <div class="container_inputs">
        <input
          class="task_input"
          placeholder="Введите задачу"
          type="text"
          v-model="title"
        />

        <input
          class="subtask_input"
          placeholder="Введите подзадачу"
          type="text"
          v-model="subtitle"
        />
      </div>
      <v-btn
        :disabled="title.length === 0"
        type="submit"
        class="mx-2"
        fab
        dark
        color="indigo"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </div>

    <v-btn
      :disabled="$store.state.todo.selectedTodosIds.length === 0"
      class="deleteSelected"
      @click="deleteSelectedTask"
      elevation="2"
      >Удалить выделенное</v-btn
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      subtitle: "",
    };
  },

  methods: {
    addTask() {
      const newObject = {
        id: Date.now(),
        title: this.title,
        subtitle: this.subtitle,
        completed: false,
      };
      this.$store.commit("addTask", newObject);
      this.title = "";
      this.subtitle = "";
    },

    deleteSelectedTask() {
      this.$store.commit("deleteSelectedTask");
    },
  },

  props: {
    todos: Object,
  },
};
</script>

<style scoped>
input {
  margin-right: 10px;
  border: 1px solid #000;
  padding: 7px;
}
.theme--dark.v-btn.v-btn--has-bg {
  background-color: #6494ff;
  margin-top: 12px;
  margin-left: 12px;
}
.v-btn:not(.v-btn--round).v-size--default {
  width: 50%;
}
.deleteSelected {
  margin-top: 20px;
}
.wrap {
  display: flex;
  justify-content: center;
}
.container_inputs {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.task_input,
.subtask_input {
  margin: 5px;
}
</style>