var LoginPage = require('./pages/login.page');
var MobilesPage = require('./pages/mobiles.page'); 
var HomePage = require('./pages/home.page');
// describe('login page', function() {

//   it('should show "invalid details" error if password is incorrect', function(){
//   	var page = new LoginPage();
// 	page.visit();
//     page.setPhone('mobile');
//     page.setPassword('WrongPassword');
//     page.login();
//     expect(page.errorText.isDisplayed()).toBe(true);
//     expect(page.errorText.getText()).toEqual('Invalid details. Please try again.');
//   })

//   it('should show "invalid phone" error if password is incorrect', function(){
//   	var page = new LoginPage();
// 	page.visit();
//     page.setPhone('7hd');
//     page.login();
//     expect(page.errorText.isDisplayed()).toBe(true);
//     expect(page.errorText.getText()).toEqual('Please enter a valid email/mobile');
//   })

//   it('should show greeting text if phone and password are correct', function() {
// 	var page = new LoginPage();
//     page.visit();
//     page.setPhone('mobile');
//     page.setPassword('password');
//     page.login();
//     expect(page.getGreeting()).toEqual('Hi Nic!');
//   });
// });

describe('Test csenario 1', function() {
  it('should test scenario', function() {
  var homePage = new HomePage();
  var loginPage = new LoginPage();
  var mobilesPage = new MobilesPage();
  //navigate to home page
  homePage.visit();

  expect(browser.getTitle()).toEqual('Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com');
  //click to login link
  homePage.goLogin();
  //type phone/email
  loginPage.setPhone('7696373114');
  //type password
  loginPage.setPassword('admin1234');
  loginPage.login(); 
  expect(homePage.getGreeting()).toEqual('Hi Nic!');
  homePage.selectNavMenu('Electronics');
  homePage.clickNavMenu('Samsung');
  
  expect(browser.getTitle()).toEqual('Mobiles - Buy Mobiles Online at Best Prices in India.');
  
  mobilesPage.clickRandomMobile(); 
  mobilesPage.addToCart();
  browser.pause();
  })
});