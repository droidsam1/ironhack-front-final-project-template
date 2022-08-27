<template>
  <div class="flex flex-start flex-col lg:flex-row">
    <aside class="left-0 top-0 lg:h-screen p-4 mt-10">
      <SideBar @create-task="createTask" @delete-all-tasks="deleteAllTasks" />
    </aside>
    <main
      class="flex-1 p-3 py-2 flex flex-col md:flex-row justify-around mt-10"
    >
      <div data-test-task-list-pending>
        <h2 class="text-center">Pending Tasks ◻️</h2>
        <TaskList
          :tasks="[...tasks.filter((t) => !t.isCompleted)]"
          @deleteTask="deleteTask"
          @toggleTaskCompleted="toggleTaskCompleted"
          @editTask="editTask"
        />
      </div>

      <div data-test-task-list-completed class="md:mt-0 mt-10">
        <h2 class="text-center">Completed Tasks ✅</h2>
        <TaskList
          :tasks="[...tasks.filter((t) => t.isCompleted)]"
          @deleteTask="deleteTask"
          @toggleTaskCompleted="toggleTaskCompleted"
          @editTask="editTask"
        />
      </div>
    </main>
    <ModalVerticalVue
      v-if="showModal"
      :header="modalHeader"
      :body="modalBody"
      :buttonMessage="modalButtonMessage"
      @close="showModal = !showModal"
    />
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";
import ModalVerticalVue from "../components/ModalVertical.vue";
import { storeToRefs } from "pinia";
import SideBar from "../components/SideBar.vue";
import TaskList from "../components/TaskList.vue";
import { ref, onMounted } from "vue";
import Task from "../interfaces/Task";
import generateRandomTaskId from "../utils/idUtils";

onMounted(() => {
  fethAllTasks();
});

const userStore = useUserStore();
const taskStore = useTaskStore();

const { tasks } = storeToRefs(taskStore);

let showModal = ref(false);
let modalHeader = ref(null);
let modalBody = ref(null);

const createTask = async (taskTitle) => {
  const { userId } = storeToRefs(userStore);
  const newTask = new Task(
    generateRandomTaskId(),
    taskTitle,
    false,
    userId.value
  );

  await taskStore.createTask(newTask);
};

const deleteAllTasks = async () => {
  const { userId } = storeToRefs(userStore);
  await taskStore.deleteAllTasks(userId.value);
};

const deleteTask = async (task) => {
  try {
    await taskStore.deleteTask(task);
  } catch (error) {
    showModal.value = true;
    modalHeader.value = " ❌Error";
    modalBody.value =
      "An error ocurred while trying to delete the task, please try again later ";
  }
};

const fethAllTasks = async () => {
  try {
    await taskStore.fetchTasks(userStore.userId);
  } catch (error) {
    showModal.value = true;
    modalHeader.value = " ❌Error";
    modalBody.value =
      "An error ocurred trying to recover your tasks, please try again later";
  }
};

const toggleTaskCompleted = async (task) => {
  try {
    await taskStore.toggleTaskCompleted(task);
  } catch (error) {
    showModal.value = true;
    modalHeader.value = " ❌Error";
    modalBody.value =
      "An error ocurred while trying to update the task, please try again later ";
  }
};

const editTask = async (task) => {
  try {
    await taskStore.editTask(task);
  } catch (error) {
    showModal.value = true;
    modalHeader.value = " ❌Error";
    modalBody.value =
      "An error ocurred while trying to update the task, please try again later ";
  }
};
</script>

<style scoped></style>
