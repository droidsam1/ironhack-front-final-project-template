import { interceptApiCall, waitForApiAResponse } from "./supabaseApi";

const locateSelector = (testSelector: string) =>
  cy.get(`[data-test-${testSelector}]`);
const clickThe = (testSelector: string) => {
  cy.get(`[data-test-${testSelector}]`).click();
};

const loginWithTestingUser = () => {
  cy.visit("/");
  locateSelector("input-email").type("test@example.co.uk");
  locateSelector("input-password").type("****");
  locateSelector("login-button").click();
};

const loginIntoApp = async () => {
  interceptApiCall();
  loginWithTestingUser();
  waitForApiAResponse();
};

const createASampleTask = (taskTitle: string) => {
  cy.visit("/dashboard");
  locateSelector("new-task-button").click();
  locateSelector("new-task-input").type(taskTitle);
  locateSelector("new-task-submit").click();
  waitForApiAResponse();
};

const markTaskAsDone = (taskTitle: string) => {
  locateSelector("task-list")
    .contains(taskTitle)
    .parent()
    .find(`[data-test-done-task-button]`)
    .click();
};

const checkTaskIsCompleted = (taskTitle: string) => {
  locateSelector("task-list-completed")
    .find(`[data-test-task-list]`)
    .should("contain", taskTitle);
};

export {
  locateSelector,
  clickThe,
  loginWithTestingUser,
  loginIntoApp,
  createASampleTask,
  markTaskAsDone,
  checkTaskIsCompleted,
};
