package org.stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class StepDef {

	public static WebDriver d;

	@Given("User in Facebook application Login page")
	public void user_in_Facebook_application_Login_page() {
		WebDriverManager.chromedriver().setup();
		d = new ChromeDriver();
		d.get("https://www.facebook.com/");
	}

	@When("User enter username and password")
	public void user_enter_username_and_password() {
		WebElement email = d.findElement(By.id("email"));
		email.sendKeys("sriniakshayaa@gmail.com");

		WebElement pass = d.findElement(By.id("pass"));
		pass.sendKeys("good");
	}

	@When("User Click Login button")
	public void user_Click_Login_button() {
		WebElement login = d.findElement(By.id("u_0_b"));
		login.click();
		Assert.assertEquals("Facebook", "facebook");
	}

	@Then("User should be in invalid Credentials page")
	public void user_should_be_in_invalid_Credentials_page() {
		System.out.println("User unable to Login ");
		d.quit();
	}

}
