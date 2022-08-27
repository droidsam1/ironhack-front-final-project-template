<template>
  <div class="modal-mask">
    <div data-test-modal class="modal-wrapper">
      <div class="modal-container">
        <form>
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            {{ task ? "Edit your task  📋" : "Your new pending task 📋" }}
          </label>
          <textarea
            v-model="taskTitle"
            data-test-new-task-input
            data-test-edit-task-input
            id="message"
            rows="4"
            class="block my-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the task decription..."
          >
          </textarea>
          <button
            data-test-new-task-submit
            data-test-edit-task-submit
            @click.prevent="submit"
            type="submit"
            class="my-2 text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            {{ task ? "Save" : "Add Task" }}
          </button>
          <button
            @click.prevent="cancel"
            class="my-2 sm:mx-2 text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Task from "../interfaces/Task";

const props = defineProps({
  task: Task,
});

let taskTitle = ref(props.task ? props.task.title : "");
const emit = defineEmits(["submit", "close"]);

const submit = () => {
  emit("submit", taskTitle.value);
  clean();
};
const cancel = () => {
  emit("close");
  clean();
};

const clean = () => {
  taskTitle.value = "";
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 700px;
  margin: 0px auto;
  padding: 40px 40px;
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
