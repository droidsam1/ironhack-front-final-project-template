import {
  When,
  Then,
  Given,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
const { visit } = cy;

Then("I visit the register page", () => {
  visit("/");
  cy.clickThe("register-link");
});

And("I set the email to {string}", (user) => {
  cy.the("input-email").type(user);
});

And("I set a password to {string}", (password) => {
  cy.the("input-password").type(password);
});

And("I set confirmPassword to {string}", (password) => {
  cy.the("input-password-confirm").type(password);
});

And("I click the register button", () => {
  cy.the("register-button").click();
});
