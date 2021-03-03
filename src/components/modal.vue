<template>
  <div class="modal_wrap">
    <div class="modal">
      <v-btn
        @click="$emit('hide-modal')"
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
          class="textarea"
          v-model="name"
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
      name: "",
    };
  },
  created() {
    this.name = this.currentTodo.title;
  },
  methods: {
    editTask() {
      const todo = {
        ...this.currentTodo,
        title: this.name,
      };
      this.$emit("edit-todo", todo);
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
.modal_wrap {
  z-index: 1;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.712);
}

.theme--dark.v-btn.v-btn--has-bg.close {
  background-color: #f94d4d;
  float: right;
  margin: 10px;
}
.modal {
  width: 40%;
  height: 25%;
  background: #c7fff8;
  position: absolute;
  top: 35%;
  left: 35%;
}
h2 {
  padding-top: 60px;
}
.container_edit {
  display: flex;
  justify-content: center;
  margin-top: 55px;
}
.v-input {
  max-width: 50%;
  margin-right: 10px;
}
.v-btn--fab.v-size--large.edit {
  width: 35px;
  height: 35px;
  margin-top: 14px;
  background-color: #5992ff;
}
</style>