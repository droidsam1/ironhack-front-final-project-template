<template>
  <div class="flex flex-start flex-col lg:flex-row">
    <aside class="left-0 top-0 md:h-screen p-4 mt-10">
      <SideBar />
    </aside>
    <main
      class="flex-1 p-3 py-2 flex flex-col lg:flex-row justify-around mt-10"
    >
      <div data-test-task-list-pending>
        <h2 class="text-center">Pending Tasks ◻️</h2>
        <TaskList
          :tasks="[...tasks.filter((t) => !t.isCompleted)]"
          @deleteTask="deleteTask"
        />
      </div>

      <div data-test-task-list-completed class="md:mt-0 mt-10">
        <h2 class="text-center">Completed Tasks ✅</h2>
        <TaskList
          :tasks="[...tasks.filter((t) => t.isCompleted)]"
          @deleteTask="deleteTask"
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
import { ref, onUpdated, onMounted } from "vue";

onMounted(() => {
  console.log("loading user tasks");
  fethAllTasks();
});

const userStore = useUserStore();
const taskStore = useTaskStore();

const { tasks } = storeToRefs(taskStore);
let showModal = ref(false);
let modalHeader = ref(null);
let modalBody = ref(null);

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

//TODO cambiar esta llamada para esperar a tener un usuario?
</script>

<style scoped></style>
