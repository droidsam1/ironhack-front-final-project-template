<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="p-1 text-center text-3xl">🗒️✏️</div>
        <h2
          class="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900"
        >
          Register here 👇
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              data-test-input-email
              v-model="inputMail"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="inputPassword"
              data-test-input-password
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="A strong password"
            />
          </div>

          <div v-if="inputPassword">
            <label for="password-confirm" class="sr-only">Password</label>
            <input
              v-model="confirmPassword"
              data-test-input-password-confirm
              id="password-confirm"
              name="password-confirm"
              type="password"
              autocomplete="current-password-confirm"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
              placeholder="Repeat the password here"
              :class="errorInput"
            />
          </div>
        </div>

        <div>
          <button
            @click.prevent="submit"
            data-test-register-button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    <ModalVerticalVue
      v-if="showModal"
      :header="header"
      :body="body"
      :buttonMessage="buttonMessage"
      @close="onModalClose"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import router from "../router/index";
import ModalVerticalVue from "../components/ModalVertical.vue";

const header = " 👉 Check your inbox!! ✉️";
const body = "You only have to confirm your email address and that's it";
const buttonMessage = "OK";

const inputMail = ref("");
const inputPassword = ref("");
const confirmPassword = ref("");
let showModal = ref(false);

const passwordsMatch = computed(() => {
  return inputPassword.value === confirmPassword.value;
});
const errorInput = computed(() => {
  return !passwordsMatch.value
    ? "focus:ring-red-500 focus:border-red-500 border-red-500 "
    : "focus:ring-indigo-500 focus:border-indigo-500  ";
});

const submit = () => {
  const form = document.querySelector("form");
  if (form.checkValidity() && passwordsMatch.value) {
    //form.submit();
    showModal.value = true;
  } else {
    form.reportValidity();
  }
};

const onModalClose = () => {
  showModal.value = false;
  router.go("/auth");
};
</script>

<style scoped></style>
