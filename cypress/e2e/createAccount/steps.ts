import {
  When,
  Then,
  Given,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

import { clickThe, locateSelector } from "../../support/step_definitions/e2e";
const { visit } = cy;

Then("I visit the register page", () => {
  visit("/");
  clickThe("register-link");
});

And("I set the email to {string}", (user: string) => {
  locateSelector("input-email").type(user);
});

And("I set a password to {string}", (password: string) => {
  locateSelector("input-password").type(password);
});

And("I set confirmPassword to {string}", (password: string) => {
  locateSelector("input-password-confirm").type(password);
});

And("I click the register button", () => {
  locateSelector("register-button").click();
});

Then(
  "I expect to be shown a warning that instructs me to confirm my email address by clicking a link in an email",
  () => {
    locateSelector("modal");
  }
);
