$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the Login functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User in Facebook application Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_in_Facebook_application_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_Click_Login_button()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[F]acebook\u003e but was:\u003c[f]acebook\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat org.stepdef.StepDef.user_Click_Login_button(StepDef.java:38)\r\n\tat ✽.User Click Login button(src/test/resources/Features/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should be in invalid Credentials page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_should_be_in_invalid_Credentials_page()"
});
formatter.result({
  "status": "skipped"
});
});