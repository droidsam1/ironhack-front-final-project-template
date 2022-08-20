// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase.js";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  getters: {
    userName: (state) => state.user?.user_metadata.name ?? state.user?.email,
  },

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async singIn(email, password) {
      const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async singOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
    // Hacer log out
    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
