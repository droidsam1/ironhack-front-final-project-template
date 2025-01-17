import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { locateSelector } from "../../../support/step_definitions/helpers/actions";
import { waitForApiAResponse } from "../../../support/step_definitions/helpers/supabaseApi";

When("I am viewing the home screen", () => {
  cy.url().should("contain", "/dashboard");
});

And("I click the log out button", () => {
  locateSelector("logout-button").click();
});

Then("I expect to be logged out of the app", () => {
  waitForApiAResponse();
  cy.url().should("not.contain", "/dashboard");
});

And("I expect to see the login page", () => {
  cy.url().should("contain", "/auth");
});
