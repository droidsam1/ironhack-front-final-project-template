Feature: New users need to register

  Scenario: As not logged user 
    When I visit landing page
    Then I should see a login page
