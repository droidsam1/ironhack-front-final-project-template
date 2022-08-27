import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import {
  locateSelector,
  loginIntoApp,
  createASampleTask,
} from "./helpers/actions";
import aSampleTaskTitle from "../fixtures/TaskFixtures";

Given("I am logged in( to the app)", async () => {
  loginIntoApp();
});

Given("I have already created a task", () => {
  createASampleTask(aSampleTaskTitle);
});

When("I locate the task I'd like to (delete)(mark as complete)", () => {
  locateSelector("task-list").should("contain", aSampleTaskTitle);
});

When("I visit the home screen", () => {
  cy.visit("/dashboard");
});
