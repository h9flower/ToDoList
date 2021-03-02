<template>
  <div class="modal_wrap">
    <div class="modal">
      <p>Удачно\неудачно</p>
      <h1>Редактирование задачи</h1>
      <v-btn
        @click="$emit('hide-modal')"
        class="mx-2"
        fab
        dark
        small
        color="primary"
      >
        <v-icon dark> mdi-minus </v-icon>
      </v-btn>
      <!-- <button @click="$emit('hide-modal')">Close</button> -->
      <v-text-field
        v-model="name"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <!-- <input type="text" v-model="name" /> -->
      <v-btn @click="editTask" class="mx-2" fab dark large color="cyan">
        <v-icon dark> mdi-pencil </v-icon>
      </v-btn>
      <!-- <button @click="editTask">Изменить</button> -->
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
  top: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.712);
}
.modal {
  padding: 70px;
  background: #c7fff8;
  position: absolute;
  top: 35%;
  left: 35%;
}
</style>