import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import {
  locateSelector,
  markTaskAsDone,
  theCompletedTaskSection,
  theInCompletedTaskSection,
} from "../../../support/step_definitions/helpers/actions";
import aSampleTaskTitle from "../../../support/fixtures/TaskFixtures";

const taskTitle = aSampleTaskTitle;

And("I click the corresponding done button to the task", () => {
  markTaskAsDone(taskTitle);
});

Then(
  "I expect to see that my task has immediately been moved to the completed section",
  () => {
    theInCompletedTaskSection().should("not.contain", taskTitle);
    theCompletedTaskSection().should("contain", taskTitle);
  }
);
