Feature: Log out from the app
    Background: As a user, I want to be able to log out from the app
        Given I am logged in to the app

    Scenario: As a user, I want to log out
        When I am viewing the home screen
        And I click the log out button
        Then I expect to be logged out of the app
        And I expect to see the login page