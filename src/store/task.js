// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";
import Task from "../interfaces/Task";
export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      if (error) throw error;
      if (tasks) this.tasks = tasks;
    },
    async createTask(task) {
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ title: task.title }]);
      if (error) throw error;
      if (data) console.log(data);
    },
    // Hacer POST
    // Hacer el PUT (edit)
    // Hacer el delete
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
