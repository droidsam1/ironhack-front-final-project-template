import { When, And } from "@badeball/cypress-cucumber-preprocessor";
import { locateSelector } from "../../../support/step_definitions/e2e";

When("I visit the home screen", () => {
  cy.visit("/dashboard");
});
And("I enter {string} in the NewTask field", (task: string) => {
  locateSelector("new-task-button").click();
  locateSelector("new-task-input").type(task);
});
