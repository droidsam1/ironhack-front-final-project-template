<template>
  <header class="p-4 shadow-sm flex justify-end">
    <UserAvatar :userName="userStore.userName" />
    <!-- <div> -->
    <!-- <div
      class="inline-block top-auto text-teal-800 float-right rounded-full mx-1 px-2"
    >
      <a href="#" class="align-middle">More</a>
    </div>
    <div
      class="inline-block top-auto text-teal-800 float-right rounded-full mx-1 px-2"
    >
      <a href="#" class="align-middle">About</a>
    </div>
    <div
      class="inline-block top-auto text-teal-800 float-right rounded-full px-2 bg-teal-100"
    >
      <a href="#" class="align-middle">Home</a>
    </div> -->
  </header>
</template>

<script setup>
import { useUserStore } from "../store/user";
const userStore = useUserStore();

import TaskComponent from "../components/TaskComponent.vue";
import UserAvatar from "./UserAvatar.vue";
</script>

<style scoped></style>
