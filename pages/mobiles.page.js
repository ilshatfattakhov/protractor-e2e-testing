'use strict';
var MobilesPage = function() {
  
  this.mobilesList = element.all(by.css('.product-unit'));
  this.addToCartBtn = element(by.xpath('//input[@value="Add to Cart"]'));

  this.visit = function() {
    browser.get('http://www.flipkart.com/mobiles');
  };

  this.clickRandomMobile = function() {
    // clicks random element
    this.mobilesList.get(Math.floor(Math.random() * 11)).click();
  };

  this.addToCart =function() {
    this.addToCartBtn.click();
  };
};
module.exports = MobilesPage;