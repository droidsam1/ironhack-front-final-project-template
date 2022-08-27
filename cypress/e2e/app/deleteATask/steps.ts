import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { locateSelector } from "../../../support/step_definitions/helpers/actions";
import aSampleTaskTitle from "../../../support/fixtures/TaskFixtures";

const taskTitle = aSampleTaskTitle;

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
