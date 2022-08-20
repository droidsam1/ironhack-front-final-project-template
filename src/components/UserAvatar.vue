<template>
  <div class="flex items-center">
    <transition name="slide-fade">
      <span
        data-test-logged-user-name
        v-if="showUserNameOnHover"
        class="font-medium text-gray-600 dark:text-gray-300 mr-2"
        >{{ userName }}</span
      >
    </transition>
    <div
      class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600"
      @mouseover="showUserNameOnHover = true"
      @mouseleave="showUserNameOnHover = false"
    >
      <svg
        class="absolute -left-1 w-12 h-12 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let showUserNameOnHover = ref(false);
const props = defineProps({ userName: String });
</script>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
