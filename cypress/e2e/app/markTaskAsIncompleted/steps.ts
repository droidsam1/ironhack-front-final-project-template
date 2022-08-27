import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {
  loginIntoApp,
  createASampleTask,
  markTaskAsDone,
  checkTaskIsCompleted,
  locateSelector,
  markTaskAsIncomplete,
  theInCompletedTaskSection,
  theCompletedTaskSection,
} from "../../../support/step_definitions/helpers/actions";
import aSampleTaskTitle from "../../../support/fixtures/TaskFixtures";

const taskTitle = aSampleTaskTitle;

Given("I have already created a task and marked it as complete", () => {
  loginIntoApp();
  createASampleTask(aSampleTaskTitle);
  markTaskAsDone(aSampleTaskTitle);
  checkTaskIsCompleted(aSampleTaskTitle);
});

When("I locate the task I'd like to mark it as incomplete", () => {
  locateSelector("task-list-completed")
    .find(`[data-test-task-list]`)
    .should("contain", aSampleTaskTitle);
});

And("I click the corresponding incomplete button to the task", () => {
  markTaskAsIncomplete(aSampleTaskTitle);
});

Then(
  "I expect to see that my task has immediately been moved to the to-do section",
  () => {
    theInCompletedTaskSection().should("contain", taskTitle);
    theCompletedTaskSection().should("not.contain", taskTitle);
  }
);
