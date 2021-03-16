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
        <div class="edit_wrap">
          <p>редактирование задачи</p>
          <v-text-field
            placeholder="Редактировать задачу"
            class="textarea"
            v-model="todoTitle"
            hide-details="auto"
          ></v-text-field>
        </div>

        <div class="edit_wrap">
          <p>редактирование описания</p>
          <v-text-field
            placeholder="Добавить описание задачи"
            class="textarea"
            v-model="todoDescription"
            hide-details="auto"
          ></v-text-field>
        </div>

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
      todoDescription: "",
      todoSubtask: "",
    };
  },

  created() {
    this.todoTitle = this.$store.getters.selectTodo.title;
    this.todoDescription = this.$store.getters.selectTodo.description;
  },

  methods: {
    editTask() {
      this.$store.commit("updateTitleTodos", {
        todoTitle: this.todoTitle,
        todoDescription: this.todoDescription,
      });
      this.$router.go(-1);
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
.edit_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}
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
.textarea {
  width: 40%;
  margin-bottom: 10px;
}
p {
  margin-right: 10px;
  width: 40%;
  margin: 10px 0;
}
</style>