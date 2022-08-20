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


export { locateSelector, clickThe, loginWithTestingUser };
