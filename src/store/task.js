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
      if (tasks)
        this.tasks = tasks.map(
          (element) =>
            new Task(
              element.id,
              element.title,
              element.is_complete,
              element.user_id
            )
        );
    },
    async createTask(task) {
      const { data, error } = await supabase.from("tasks").insert([
        {
          id: task.id,
          user_id: task.owner,
          title: task.title,
          is_complete: task.isCompleted,
          inserted_at: new Date().toISOString(),
        },
      ]);
      if (error) throw error;
      if (data) this.tasks = [...this.tasks, data[0]];
    },
    // Hacer POST
    // Hacer el PUT (edit)
    // Hacer el delete
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
