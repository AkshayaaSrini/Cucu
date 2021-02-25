Feature: To validate the Login functionality
Scenario: To validate the Login functionality

Given User in Facebook application Login page
When User enter username and password
And User Click Login button
Then User should be in invalid Credentials page