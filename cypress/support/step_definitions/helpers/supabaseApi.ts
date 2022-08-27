const interceptApiCall = () => {
  cy.intercept({
    method: "POST",
    hostname: Cypress.env("SUPABASE_HOST"),
    path: "*",
  }).as("apiAuth");
};

const waitForApiAResponse = () => {
  cy.wait("@apiAuth");
};
export { interceptApiCall, waitForApiAResponse };
