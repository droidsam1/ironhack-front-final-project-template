import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { locateSelector } from "../../../support/step_definitions/e2e";
import { waitForApiAResponse } from "../../../support/step_definitions/supabaseApi";
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
    //TODO create a completed section
  }
);