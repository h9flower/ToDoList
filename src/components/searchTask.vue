<template>
  <input
    @input="onInput($event)"
    v-bind:value="value"
    placeholder="Поиск задачи"
    type="text"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  width: 50%;
  margin-top: 30px;
  border: 1px solid #000;
  padding: 5px;
}
</style>