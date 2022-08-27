<template>
  <div>
    <CreateTask @createTask="createTask" />
  </div>
</template>

<script setup>
import CreateTask from "./CreateTaskButton.vue";
const emit = defineEmits(["createTask"]);

const createTask = (taskTitle) => {
  emit("createTask", taskTitle);
};
</script>

<style></style>
