exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./flipkart-spec.js'],
  capabilities: 
  	{ 
  		'browserName': 'chrome', 
  		'chromeOptions': {'args': ['--window-size=1690,1300'] } 
  	},
   jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        isVerbose: true,
        includeStackTrace: true
    }
};