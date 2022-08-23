<template>
  <div v-if="!tasks">
    <h3 class="text-lg text-center py-10 font-semibold">
      You have no more pending tasks, 📋✔️
    </h3>
  </div>
  <TaskElement />
</template>

<script setup>
import TaskElement from "./TaskElement.vue";
const props = defineProps({
  tasks: Array,
});
</script>

<style></style>
