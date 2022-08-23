Feature: Add a new task
    Background: As a logged in user, I want to add a new task and have it appear on my to-do list
        Given I am logged in

    Scenario: As a logged-in user I want to create a new task
        When I visit the home screen
        And I enter "My cool task" in the NewTask field
        And I click the submit button
        Then I expect to see "My cool task" in the To-Do list of tasks