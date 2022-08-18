<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="p-1 text-center text-3xl">🗒️✏️</div>
        <h2
          data-test-login
          class="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900"
        >
          Sign in
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          You don't have an account?
          <router-link to="/register" data-test-register-link>
            <span class="font-medium text-indigo-600 hover:text-indigo-500">
              Register
            </span>
          </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              data-test-input-email
              v-model="email"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              data-test-input-password
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            @click.prevent="singIn"
            data-test-login-button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";

const userStore = useUserStore();

let email = ref("");
let password = ref("");

const singIn = async () => {
  await userStore.singIn(email.value, password.value);
};
</script>
