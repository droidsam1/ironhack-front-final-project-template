<template>
  <HeaderLoggedUser />
  <section>
    <router-view class="app-main" />
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";
import HeaderLoggedUser from "./components/HeaderLoggedUser.vue";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      router.push({ path: "/auth" });
    } else {
      // continue to dashboard
      router.push({ path: "/dashboard" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>
<style>
html,
body {
  height: 100%; /*both html and body*/
}
body {
  margin: 0; /*reset default margin*/
}
</style>
