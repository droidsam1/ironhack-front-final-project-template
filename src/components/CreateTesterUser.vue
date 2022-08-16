<template>
  <h1>This component creates a user for testing</h1>
  <button @click="createUser">Create Test user</button>
</template>

<script>
import { supabase } from "../supabase";
export default {
  methods: {
    async createUser() {
      const { user, error } = await supabase.auth.api.createUser({
        email: "tester@email.com",
        password: "p6DFSh1gz2%s",
        user_metadata: { name: "Testing user" },
        email_confirm: true,
      });
      console.log("created User");
    },
  },
};
</script>

<style scoped>
button {
  background-color: blue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
