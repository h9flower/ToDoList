<template>
  <form @submit.prevent="onSubmit">
    <div>
      <input placeholder="Введите задачу" type="text" v-model="title" />

      <v-btn
        @click="onSubmit"
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
      :disabled="disableds"
      class="delete_high"
      @click="deleteSelectedIDs"
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
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
          // createdAt:
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
    disableds: Boolean,
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
.delete_high {
  margin-top: 20px;
}
</style>