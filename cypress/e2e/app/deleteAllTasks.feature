Feature: Delete all tasks
    Background: As a logged in user, I want to delete all previous task to be able to start from a scratch
        Given I am logged in
        Given I have already created a task

    Scenario: As a logged-in user I want to delete all my tasks
        When I visit the home screen
        And I click the Delete All Tasks button
        Then I expect to see that my task has been permanently removed from every list