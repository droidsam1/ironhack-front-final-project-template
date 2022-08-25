import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { locateSelector } from "../../../support/step_definitions/e2e";
import { waitForApiAResponse } from "../../../support/step_definitions/supabaseApi";

const taskTitle = "A task to be deleted";

Given("I have already created a task", () => {
  cy.visit("/dashboard");
  locateSelector("new-task-button").click();
  locateSelector("new-task-input").type(taskTitle);
  locateSelector("new-task-submit").click();
  waitForApiAResponse();
});

When("I locate the task I'd like to delete", () => {
  locateSelector("task-list").should("contain", taskTitle);
});

And("I click the corresponding delete button to the task", () => {
  locateSelector("task-list")
    .contains(taskTitle)
    .parent()
    .find(`[data-test-delete-task-button]`)
    .click();
});

Then(
  "I expect to see that my task has been permanently removed from every list",
  () => {
    locateSelector("task-list").should("not.contain", taskTitle);
  }
);
