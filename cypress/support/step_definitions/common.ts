import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { loginWithTestingUser } from "./e2e";
import { interceptApiCall, waitForApiAResponse } from "./supabaseApi";

Given("I am logged in to the app", async () => {
  interceptApiCall();
  loginWithTestingUser();
  waitForApiAResponse();
});
