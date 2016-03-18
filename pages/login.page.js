'use strict';
var LoginPage = function() {

  this.phone = element(by.css('.login-form-input.user-email'));
  this.password = element(by.css('.login-form-input.user-pwd'));
  this.loginButton = element(by.css('.submit-btn.login-btn.btn'));
  this.errorText = element(by.css('.err_text'));
  // this.passwordRequiredError = element(by.css('error-password-required'));
  
  this.visit = function() {
    browser.get('https://www.flipkart.com/account/login');
  };
 
  this.setPhone = function(phone) {
    this.phone.clear();
    this.phone.sendKeys(phone);
  };
 
  this.setPassword = function(password){
    this.password.clear();
    this.password.sendKeys(password);
  };
 
  this.login = function() {
    this.loginButton.click();
  };

  this.getGreeting = function() {
    return element(by.css('._1AHrFc')).getText();

  }
};
module.exports = LoginPage;