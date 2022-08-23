import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { locateSelector } from "../../../support/step_definitions/e2e";
import { waitForApiAResponse } from "../../../support/step_definitions/supabaseApi";

When("I visit the home screen", () => {
  cy.visit("/dashboard");
});
And("I enter {string} in the NewTask field", (task: string) => {
  locateSelector("new-task-button").click();
  locateSelector("new-task-input").type(task);
});

And("I click the submit button", () => {
  locateSelector("new-task-submit").click();
});

Then("I expect to see {string} in the To-Do list of tasks", (task: string) => {
  waitForApiAResponse();
  locateSelector("task-list").should("contain", task);
});
