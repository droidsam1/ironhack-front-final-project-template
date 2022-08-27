<template>
  <div v-if="task && task.title">
    <div
      :class="{ isCompleted: task.isCompleted }"
      class="min-width-task m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 flex flex-row items-center justify-between"
    >
      <p
        class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 ml-2"
      >
        {{ task.title }}
      </p>
      <div class="m-3 flex flex-row items-center">
        <div
          class="text-sm inline rounded-full px-2 flex flex-row items-center"
        >
          <input
            data-test-done-task-button
            @click="toggleTaskCompleted"
            :checked="task.isCompleted"
            :id="'green-checkbox-' + task.id"
            type="checkbox"
            class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            v-if="task.isCompleted"
            :for="'green-checkbox-' + task.id"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Completed</label
          >
        </div>

        <span
          @click="openModal"
          data-test-edit-task-button
          class="ml-2 align-center cursor-pointer"
        >
          <svg
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>

        <strong
          @click="deleteTask"
          data-test-delete-task-button
          class="text-xl ml-2 align-center cursor-pointer alert-del"
          >&times;</strong
        >
      </div>
    </div>
  </div>
  <ModalTask
    @submit="editTask"
    @close="showModal = !showModal"
    v-if="showModal"
    :task="task"
  />
</template>

<script setup>
import Task from "../interfaces/Task";
import ModalTask from "../components/ModalTask.vue";
import { ref } from "vue";
const props = defineProps({
  task: Task,
});
const emit = defineEmits(["deleteTask", "toggleTaskCompleted", "editTask"]);

function deleteTask() {
  emit("deleteTask", props.task);
}

const toggleTaskCompleted = () => {
  props.task.isCompleted = !props.task.isCompleted;
  emit("toggleTaskCompleted", props.task);
};

let showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const editTask = (newTaskTitle) => {
  props.task.title = newTaskTitle;
  emit("editTask", props.task);
  showModal.value = false;
};
</script>

<style scoped>
.min-width-task {
  min-width: 250px;
}
.isCompleted {
  border: 1px solid #999999;
  background-color: rgba(169, 169, 169, 0.704);
}
.isCompleted > p {
  text-decoration: line-through;
  filter: grayscale(100%);
}
</style>
