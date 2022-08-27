<template>
  <div>
    <CreateTask @createTask="createTask" />
    <DeleteAllTasksButton @delete-all-tasks="deleteAllTasks" />
  </div>
</template>

<script setup>
import CreateTask from "./CreateTaskButton.vue";
import DeleteAllTasksButton from "./DeleteAllTasksButton.vue";
const emit = defineEmits(["createTask", "delete-all-tasks"]);

const createTask = (taskTitle) => {
  emit("createTask", taskTitle);
};
const deleteAllTasks = () => {
  emit("delete-all-tasks");
};
</script>

<style></style>
