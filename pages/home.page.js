'use strict';
var HomePage = function() {
 
  this.visit = function() {
    browser.ignoreSynchronization = true;
    browser.driver.get('https://www.flipkart.com/');

  };
 
  this.selectNavMenu = function(item) {
    var item = element(by.xpath('//a[@title="'+item+'"]'));
    browser.actions().mouseMove(item).perform();
  };

  this.clickNavMenu = function(item) {
    var menuItem = element(by.xpath('//*[@title="'+item+'"]'));
    menuItem.click();
  };

  this.goLogin = function() {
    element(by.linkText('Log In')).click();
  };

  this.getGreeting = function() {
    return element(by.css('._1AHrFc')).getText();
  }

};

module.exports = HomePage;