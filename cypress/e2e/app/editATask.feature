Feature: Edit a task
    Background: As a logged in user, I want to edit an existing task and have the app display the updated content
        Given I am logged in to the app
        And I have already created a task

    Scenario: As a user, I want to edit the title of my task
        When I locate the task I'd like to edit
        And I click the corresponding Edit button to the task
        Then I expect the title of the task to become editable
        When I enter a new description for the task
        And I click submit
        Then I expect to see my updated task on the To-Do list