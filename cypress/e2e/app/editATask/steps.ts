import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import {
  locateSelector,
  clickTheEditButton,
  theInCompletedTaskSection,
} from "../../../support/step_definitions/helpers/actions";
import aSampleTaskTitle from "../../../support/fixtures/TaskFixtures";

const taskTitle = aSampleTaskTitle;
const newTaskTitle = "A new task title";

When("I locate the task I'd like to edit", () => {
  locateSelector("task-list").contains(taskTitle);
});

And("I click the corresponding Edit button to the task", () => {
  clickTheEditButton(taskTitle);
});

Then("I expect the title of the task to become editable", () => {
  locateSelector("edit-task-input").clear();
  locateSelector("edit-task-input").should("have.value", "");
});

Then("I enter a new description for the task", () => {
  locateSelector("edit-task-input").clear();
  locateSelector("edit-task-input").type(newTaskTitle);
});

And("I click submit", () => {
  locateSelector("edit-task-submit").click();
});

Then("I expect to see my updated task on the To-Do list", () => {
  theInCompletedTaskSection().should("contain", newTaskTitle);
});
