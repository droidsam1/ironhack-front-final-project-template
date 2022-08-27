const interceptApiCall = () => {
  interceptApiPostCall();
  interceptApiGetCall();
};

const interceptApiPostCall = () => {
  cy.intercept({
    method: "POST",
    hostname: Cypress.env("SUPABASE_HOST"),
    path: "*",
  }).as("apiPost");
};

const interceptApiGetCall = () => {
  cy.intercept({
    method: "GET",
    hostname: Cypress.env("SUPABASE_HOST"),
    path: "*",
  }).as("apiGet");
};

const waitForApiAResponse = () => {
  cy.wait("@apiPost");
  cy.wait("@apiGet");
};
export { interceptApiCall, waitForApiAResponse };
