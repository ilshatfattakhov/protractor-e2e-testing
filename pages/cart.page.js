'use strict';

var CartPage = function() {
 
  this.visit = function() {
    browser.ignoreSynchronization = true;
    browser.get('https://www.flipkart.com/viewcart');

  };
 


};

module.exports = CartPage;