<template>
  <header v-if="userStore.userName" class="p-4 shadow-sm flex justify-end">
    <UserAvatar :userName="userStore.userName" />
    <LogoutButton @logout="logout" />
  </header>
</template>

<script setup>
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
