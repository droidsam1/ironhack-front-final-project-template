Feature: Authentication

  Scenario: As a new user, I want to be redirected to sigin page
    When I visit landing page
    Then I should see a login page
    Then I should see a login form
