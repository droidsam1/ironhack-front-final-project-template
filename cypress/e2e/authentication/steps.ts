import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
const { visit } = cy;

Given("I can visit the main page", () => {
  visit("/");
});

When("I visit landing page", () => {
  visit("/");
});

Then("I should see a login page", () => {
  cy.the("login").contains("Sign in");
});

Then("I should see a login form", () => {
  cy.the("input-email");
  cy.the("input-password");
  cy.the("login-button");
});
