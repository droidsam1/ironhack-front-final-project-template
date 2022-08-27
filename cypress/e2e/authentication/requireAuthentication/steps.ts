import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { locateSelector } from "../../../support/step_definitions/helpers/actions";
const { visit } = cy;

Given("I can visit the main page", () => {
  visit("/");
});

When("I visit landing page", () => {
  visit("/");
});

Then("I should see a login page", () => {
  locateSelector("login").contains("Sign in");
});

Then("I should see a login form", () => {
  locateSelector("input-email");
  locateSelector("input-password");
  locateSelector("login-button");
});
