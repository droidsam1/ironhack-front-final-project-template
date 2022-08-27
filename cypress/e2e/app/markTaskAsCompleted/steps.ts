import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { locateSelector } from "../../../support/step_definitions/e2e";
import aSampleTaskTitle from "../../../support/fixtures/TaskFixtures";

const taskTitle = aSampleTaskTitle;

And("I click the corresponding done button to the task", () => {
  locateSelector("task-list")
    .contains(taskTitle)
    .parent()
    .find(`[data-test-done-task-button]`)
    .click();
});

Then(
  "I expect to see that my task has immediately been moved to the completed section",
  () => {
    locateSelector("task-list-pending")
      .find(`[data-test-task-list]`)
      .should("not.contain", taskTitle);

    locateSelector("task-list-completed")
      .find(`[data-test-task-list]`)
      .should("contain", taskTitle);
  }
);
