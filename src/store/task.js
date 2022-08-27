// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";
import Task from "../interfaces/Task";
export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks(userId) {
      const { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .match({ user_id: userId })
        .order("id", { ascending: false });
      if (error) throw error;
      if (tasks) {
        this.tasks = tasks.map(
          (element) =>
            new Task(
              element.id,
              element.title,
              element.is_complete,
              element.user_id
            )
        );
      }
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
    async deleteAllTasks(userId) {
      const unDeletedTasks = this.tasks;
      this.tasks = [];
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ user_id: userId });
      if (error) {
        this.tasks = unDeletedTasks;
        throw error;
      }
    },

    async deleteTask(task) {
      const taskToBeDeleted = task;
      this.tasks = [...this.tasks].filter((t) => t.id !== taskToBeDeleted.id);

      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: taskToBeDeleted.id });
      if (error) {
        this.tasks = [...this.tasks, taskToBeDeleted];
        throw error;
      }
    },
    async toggleTaskCompleted(task) {
      this.editTask(task);
    },
    async editTask(task) {
      const taskToBeUpdated = task;

      console.log(taskToBeUpdated);

      const { data, error } = await supabase
        .from("tasks")
        .update({
          is_complete: taskToBeUpdated.isCompleted,
          title: taskToBeUpdated.title,
        })
        .match({ id: taskToBeUpdated.id });
      if (error) throw error;
    },
  },
});
