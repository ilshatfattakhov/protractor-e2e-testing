'use strict';

var HomePage = function() {
  this.loginLink = element(by.linkText('Log In')); 
  this.logoutLink = element(by.linkText('Log Out'));
  this.greeting = element(by.css('._1AHrFc'));
  this.cartBtn = element(by.css('.btn-cart'));

  this.visit = function() {
    browser.ignoreSynchronization = true;
    browser.get('https://www.flipkart.com/');

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
    this.loginLink.click();
  };

  this.logout = function() {
    browser.actions().mouseMove(this.greeting).perform();
    this.logoutLink.click();
  }

  this.goCart = function(){
    this.cartBtn.click(); 
  }

  this.getGreeting = function() {
    return this.greeting.getText();
  }

};

module.exports = HomePage;