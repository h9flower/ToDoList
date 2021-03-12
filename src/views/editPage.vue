<template>
  <div class="modal_wrap">
    <div class="modal">
      <v-btn
        @click="moveBack"
        class="mx-2 close"
        fab
        dark
        small
        color="primary"
      >
        <v-icon dark> mdi-close </v-icon>
      </v-btn>

      <h2>Редактирование задачи</h2>

      <div class="container_edit">
        <v-text-field
          placeholder="Добавить задачу"
          class="textarea"
          v-model="todoTitle"
          hide-details="auto"
        ></v-text-field>

        <v-text-field
          placeholder="Добавить подзадачу"
          class="textarea"
          v-model="todoSubTitle"
          hide-details="auto"
        ></v-text-field>

        <v-btn @click="editTask" class="mx-2 edit" fab dark large color="cyan">
          <v-icon dark> mdi-pencil </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoTitle: "",
      todoSubTitle: "",
    };
  },

  created() {
    this.todoTitle = this.$store.getters.selectTodo.title;
    this.todoSubTitle = this.$store.getters.selectTodo.subtitle;
  },

  methods: {
    editTask() {
      this.$store.commit("updateTitleTodos", {
        todoTitle: this.todoTitle,
        todoSubTitle: this.todoSubTitle,
      });
    },
    moveBack() {
      this.$router.go(-1);
    },
  },

  props: {
    currentTodo: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.close {
  top: 10px;
  right: 30px;
  position: absolute;
}
.edit {
  margin-top: 20px;
}
.modal_wrap {
  top: 0;
  height: 100vh;
  background: #d0fbfd;
  margin-top: 0px;
  position: absolute;
  width: 100vw;
}
.modal {
  padding: 100px;
  width: 50%;
  margin: 0 auto;
}
</style>