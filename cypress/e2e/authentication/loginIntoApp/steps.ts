import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { locateSelector } from "../../../support/step_definitions/e2e";
import {
  interceptApiCall,
  waitForApiAResponse,
} from "../../../support/step_definitions/supabaseApi";

const { visit } = cy;

Given("I already have an account", async () => {
  //TODO create tester user
  interceptApiCall();
});

When("I visit the login page", () => {
  visit("/");
});

And("I enter my email as {string}", (user: string) => {
  locateSelector("input-email").type(user);
});

And("I enter my password as {string}", (password: string) => {
  locateSelector("input-password").type(password);
});

And("I click the Log In button", async () => {
  locateSelector("login-button").click();
});

Then("I expect to be logged in to the app", () => {
  waitForApiAResponse();
  locateSelector("logged-user-name ").should("contain", "Testing user");
});

And("I expect to see the home screen", () => {
  cy.url().should("contain", "/dashboard");
});
