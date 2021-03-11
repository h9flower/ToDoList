<template>
  <form @submit.prevent="addTask">
    <div>
      <input placeholder="Введите задачу" type="text" v-model="title" />

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
    };
  },

  methods: {
    addTask() {
      const newObject = { id: Date.now(), title: this.title, completed: false };
      this.$store.commit("addTask", newObject);
      console.log(this.$store.state);
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
.v-btn--fab.v-size--default {
  top: -3px;
  width: 30px;
  height: 30px;
}
.theme--dark.v-btn.v-btn--has-bg {
  background-color: #6494ff;
}
.v-btn:not(.v-btn--round).v-size--default {
  width: 50%;
}
.deleteSelected {
  margin-top: 20px;
}
</style>