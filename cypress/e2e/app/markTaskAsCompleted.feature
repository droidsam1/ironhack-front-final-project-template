Feature: Mark a task as complete
    Background: As a logged in user, I want to be able to mark a task as complete and automatically move it to the completed section
        Given I am logged in to the app
        And I have already created a task

    Scenario: As a logged-in user I want to mark a task as complete
        When I locate the task I'd like to mark as complete
        And I click the corresponding done button to the task
        Then I expect to see that my task has immediately been moved to the completed section