Feature: Create an account
  Background: As a new user, I want to register with the to-do app
  # Given I do not have an account

  Scenario: As a user, I want to create an account
    When I visit the register page
    And I set the email to "test@example.co.uk"
    And I set a password to "****"
    And I set confirmPassword to "****"
    And I click the register button
    Then I expect to be shown a warning that instructs me to confirm my email address by clicking a link in an email
#   And I click the link provided in the email
#   Then I expect to be logged in to the app
#   And I expect to see the home screen
