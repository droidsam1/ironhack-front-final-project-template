Feature: Mark a task as incomplete
  Background: As a logged in user, I want to be able to mark a task as incomplete and automatically move it back to the to-do section 
    Given I have already created a task and marked it as complete

Scenario: As a logged-in user I want to mark a task as incomplete
  When I locate the task I'd like to mark it as incomplete
  And I click the corresponding incomplete button to the task
  Then I expect to see that my task has immediately been moved to the to-do section