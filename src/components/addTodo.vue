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
        <!---------------------------------- -->
        <div class="modal_wrap" v-if="showModal" @close="showModal = false">
          <div class="modal">
            <v-btn
              @click="showModal = false"
              class="mx-2 close"
              fab
              dark
              small
              color="primary"
            >
              <v-icon dark> mdi-close </v-icon>
            </v-btn>

            <h2>Добавление подзадачи</h2>

            <div class="container_edit">
              <v-text-field
                v-model="titleSubtask"
                class="textarea"
                hide-details="auto"
              ></v-text-field>

              <v-btn
                @click="addTitleSubtask"
                class="mx-2 edit"
                fab
                dark
                large
                color="cyan"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <!---------------------------------- -->

        <input
          :disabled="title.length === 0"
          class="subtask_input"
          placeholder="Введите описание"
          type="text"
          v-model="description"
        />

        <v-btn
          :disabled="title.length === 0"
          class="callModalAddSubtask"
          @click="showModal = true"
          elevation="2"
          >Добавить подзадачу</v-btn
        >
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
      description: "",
      showModal: false,
      titleSubtask: "",
    };
  },

  methods: {
    addTask() {
      const newObject = {
        id: Date.now(),
        title: this.title,
        subtodos: [{ id: Date.now(), title: this.subtodo }],
        description: this.description,
        completed: false,
      };
      this.$store.commit("addTask", newObject);
      this.title = "";
      this.subtodo = "";
      this.description = "";

      // if()
    },

    deleteSelectedTask() {
      this.$store.commit("deleteSelectedTask");
    },

    addTitleSubtask() {
      console.log("addTitleSubtask", this.titleSubtask);
      const newArr = { id: Date.now(), title: this.titleSubtask };
      this.$store.commit("pushArr", {
        newArr,
        title: this.titleSubtask,
      });
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
  padding-left: 70px;
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
.v-btn:not(.v-btn--round).v-size--default.callModalAddSubtask {
  width: 100%;
}

.modal_wrap {
  z-index: 1;
  top: 0;
  left: 0;
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
  z-index: 1;
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