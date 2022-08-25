import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { locateSelector } from "../../../support/step_definitions/e2e";
import aSampleTaskTitle from "../../../support/fixtures/TaskFixtures";

const taskTitle = aSampleTaskTitle;

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
