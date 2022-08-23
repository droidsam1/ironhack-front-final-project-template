<template>
  <div class="flex flex-start flex-col md:flex-row">
    <aside class="left-0 top-0 md:h-screen p-4 mt-10">
      <SideBar />
    </aside>
    <main class="flex-1 p-3 py-2">
      <div>
        <TaskList />
      </div>
    </main>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user";

const userStore = useUserStore();

import { storeToRefs } from "pinia";
import HeaderLoggedUser from "../components/HeaderLoggedUser.vue";
import SideBar from "../components/SideBar.vue";
import TaskList from "../components/TaskList.vue";

const { userName } = storeToRefs(userStore);
</script>

<style scoped></style>
