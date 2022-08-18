import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { locateSelector } from "../../support/step_definitions/e2e";
const { visit } = cy;

Given("I already have an account", async () => {
  //TODO create tester user
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

  // cy.intercept({
  //   method: "POST",
  //   url: "https://gnqeilcxjpdysubjpclz.supabase.co/auth/v1/token?grant_type=password",
  // }).as("apiCheck");
});

Then("I expect to be logged in to the app", () => {
  // cy.wait("@apiCheck").then((interception) => {
  //   assert.isNotNull(interception.response.body, "1st API call has data");
  // });
  cy.wait(500);
  visit("/dashboard");
  locateSelector("logged-user-name ");
});

And("I expect to see the home screen", () => {
  // cy.url({ decode: true }).should("contain", "dashboard");
});
