<template>
  <div v-if="task && task.title">
    <div
      class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 flex flex-row items-center justify-between"
    >
      <p
        class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 ml-2"
      >
        {{ task.title }}
      </p>
      <div class="m-3 flex flex-row items-center">
        <div class="text-sm inline rounded-full px-2">
          <input
            data-test-done-task-button
            v-model="task.isCompleted"
            :checked="task.isCompleted"
            id="green-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            v-if="task.isCompleted"
            for="green-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Completed</label
          >
        </div>

        <strong
          @click="deleteTask"
          data-test-delete-task-button
          class="text-xl ml-2 align-center cursor-pointer alert-del"
          >&times;</strong
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Task from "../interfaces/Task";
const props = defineProps({
  task: Task,
});
const emit = defineEmits(["deleteTask"]);

function deleteTask() {
  emit("deleteTask", props.task);
}
</script>

<style></style>
