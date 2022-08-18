<template>
  <HeaderLoggedUser />
  <div class="container mt-4 mx-auto">
    <TaskComponent />
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user";

const userStore = useUserStore();

import { storeToRefs } from "pinia";
import TaskComponent from "../components/TaskComponent.vue";
import HeaderLoggedUser from "../components/HeaderLoggedUser.vue";

const { userName } = storeToRefs(userStore);
</script>

<style></style>
