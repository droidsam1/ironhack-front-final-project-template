import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { loginWithTestingUser, locateSelector } from "./helpers/actions";
import { interceptApiCall, waitForApiAResponse } from "./helpers/supabaseApi";
import aSampleTaskTitle from "../fixtures/TaskFixtures";

Given("I am logged in( to the app)", async () => {
  interceptApiCall();
  loginWithTestingUser();
  waitForApiAResponse();
});

Given("I have already created a task", () => {
  cy.visit("/dashboard");
  locateSelector("new-task-button").click();
  locateSelector("new-task-input").type(aSampleTaskTitle);
  locateSelector("new-task-submit").click();
  waitForApiAResponse();
});

When("I locate the task I'd like to (delete)(mark as complete)", () => {
  locateSelector("task-list").should("contain", aSampleTaskTitle);
});
