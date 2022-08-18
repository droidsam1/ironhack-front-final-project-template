Feature: Log in to the app
    Background: As a user, I want to log in to the to-do app
        Given I already have an account

    Scenario: As a user, I want to log in to the app
        When I visit the login page
        And I enter my email as "test@example.co.uk"
        And I enter my password as "****"
        And I click the Log In button
        Then I expect to be logged in to the app
        And I expect to see the home screen