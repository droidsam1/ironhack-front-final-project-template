import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
const { visit } = cy;

Given("I can visit the main page", () => {
  visit("/");
});

When("I visit landing page", () => {
  visit("/");
});

Then("I should see a login page", () => {
  cy.theSelector("login").contains("Login");
});
