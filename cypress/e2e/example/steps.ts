import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
Given("I can visit the main page", () => {
  cy.visit("/");
});

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  cy.get("#searchbox_input").should(
    "have.attr",
    "placeholder",
    "Search without being tracked"
  );
});
