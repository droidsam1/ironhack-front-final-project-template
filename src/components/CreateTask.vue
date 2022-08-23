<template>
  <div>
    <button
      @click="showInput = !showInput"
      data-test-new-task-button
      type="submit"
      class="my-2 text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
    >
      Add New Task ✏️
    </button>
    <ModalTask
      @submit="submit"
      @close="showInput = !showInput"
      v-show="showInput"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalTask from "./ModalTask.vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../store/task";
import Task from "../interfaces/Task";
import generateRandomTaskId from "../utils/idUtils";
import { useUserStore } from "../store/user";

const userStore = useUserStore();

const { userId } = storeToRefs(userStore);

const showInput = ref(false);

const taskStore = useTaskStore();

const submit = async (taskTitle) => {
  const task = new Task(generateRandomTaskId(), taskTitle, false, userId.value);
  await taskStore.createTask(task);
  showInput.value = false;
};
</script>

<style></style>
