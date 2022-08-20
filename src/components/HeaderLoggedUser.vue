<template>
  <header class="p-4 shadow-sm flex justify-end">
    <UserAvatar :userName="userStore.userName" />
    <LogoutButton @logout="logout" />
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
import TaskComponent from "../components/TaskComponent.vue";
import UserAvatar from "./UserAvatar.vue";
import LogoutButton from "./LogoutButton.vue";

import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const router = useRouter();

const logout = async () => {
  console.log("logging out");
  userStore.singOut();
  router.push({ path: "/auth" });
};
</script>

<style scoped></style>
