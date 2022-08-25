<template>
  <div v-if="!tasks">
    <h3 class="text-lg text-center py-10 font-semibold">
      You have no more pending tasks, 📋✔️
    </h3>
  </div>
  <div data-test-task-list>
    <TaskElement
      v-for="task in tasks"
      v-bind:key="task.id"
      :task="task"
      @deleteTask="deleteTask"
    />
  </div>
</template>

<script setup>
import TaskElement from "./TaskElement.vue";
const props = defineProps({
  tasks: Array,
});

const emit = defineEmits(["deleteTask"]);

function deleteTask(task) {
  emit("deleteTask", task);
}
</script>

<style></style>
