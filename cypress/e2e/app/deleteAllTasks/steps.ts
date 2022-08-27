import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import {
  locateSelector,
  theInCompletedTaskSection,
  theCompletedTaskSection,
} from "../../../support/step_definitions/helpers/actions";
import aSampleTaskTitle from "../../../support/fixtures/TaskFixtures";

const taskTitle = aSampleTaskTitle;

And("I click the Delete All Tasks button", () => {
  locateSelector("delete-all-tasks-button").click();
});

Then(
  "I expect to see that my task has been permanently removed from every list",
  () => {
    theInCompletedTaskSection().should("not.contain", taskTitle);
    theCompletedTaskSection().should("not.contain", taskTitle);
  }
);
