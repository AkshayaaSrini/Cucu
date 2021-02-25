package org.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources", glue="org.stepdef", monochrome=true, plugin= {"html:target", "json:target//report.json"})

public class TestRunner {

}
