Feature: Delete a task
  Background: As a logged in user, I want to be able to permanently delete an existing task
    Given I am logged in to the app
    Given I have already created a task

  Scenario: As a logged-in user I want to delete a task
    When I locate the task I'd like to delete
    And I click the corresponding delete button to the task
# Then I expect to see that my task has been permanently removed from every list