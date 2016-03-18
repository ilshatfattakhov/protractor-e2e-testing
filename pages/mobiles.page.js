'use strict';
var MobilesPage = function() {

  this.visit = function() {
    browser.get('http://www.flipkart.com/mobiles');
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
module.exports = MobilesPage;