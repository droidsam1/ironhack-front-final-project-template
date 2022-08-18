<template>
  <header class="p-4 shadow-sm">
    <div class="inline-block text-lg">
      <h1>Welcome back</h1>
      <span data-test-logged-user-name>{{ userStore.userName }}</span>
    </div>
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
import { computed, ref } from "vue";
import { useUserStore } from "../store/user";
const userStore = useUserStore();

import { storeToRefs } from "pinia";
import TaskComponent from "../components/TaskComponent.vue";
</script>

<style></style>
