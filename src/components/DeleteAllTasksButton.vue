<template>
  <button
    @click="deleteAll"
    data-test-delete-all-tasks-button
    type="submit"
    class="my-2 text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
  >
    Delete all tasks ☠️
  </button>
</template>

<script setup>
const emit = defineEmits(["delete-all-tasks"]);
const deleteAll = async (taskTitle) => {
  emit("delete-all-tasks");
};
</script>

<style></style>
