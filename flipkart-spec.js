var LoginPage = require('./pages/login.page');
var MobilesPage = require('.pages/mobiles.page'); 
describe('login page', function() {
	beforeEach(function() {
	  return browser.ignoreSynchronization = true;
	});

  it('should show "invalid details" error if password is incorrect', function(){
  	var page = new LoginPage();
	page.visit();
    page.setPhone('mobile');
    page.setPassword('WrongPassword');
    page.login();
    expect(page.errorText.isDisplayed()).toBe(true);
    expect(page.errorText.getText()).toEqual('Invalid details. Please try again.');
  })

  it('should show "invalid phone" error if password is incorrect', function(){
  	var page = new LoginPage();
	page.visit();
    page.setPhone('7hd');
    page.login();
    expect(page.errorText.isDisplayed()).toBe(true);
    expect(page.errorText.getText()).toEqual('Please enter a valid email/mobile');
  })

  it('should show greeting text if phone and password are correct', function() {
	var page = new LoginPage();
    page.visit();
    page.setPhone('mobile');
    page.setPassword('password');
    page.login();
    expect(page.getGreeting()).toEqual('Hi Nic!');
  });
});

describe('Mobiles page', function(){
	mobilesPage = new MobilesPage()
});