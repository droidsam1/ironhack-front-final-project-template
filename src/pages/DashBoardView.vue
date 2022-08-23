<template>
  <div class="flex flex-start flex-col md:flex-row">
    <aside class="left-0 top-0 md:h-screen p-4 mt-10">
      <SideBar />
    </aside>
    <main class="flex-1 p-3 py-2">
      <div>
        <TaskList :tasks="tasks" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";

const userStore = useUserStore();
const taskStore = useTaskStore();

import { storeToRefs } from "pinia";
import HeaderLoggedUser from "../components/HeaderLoggedUser.vue";
import SideBar from "../components/SideBar.vue";
import TaskList from "../components/TaskList.vue";

const { userName } = storeToRefs(userStore);
const { tasks } = storeToRefs(taskStore);
</script>

<style scoped></style>
