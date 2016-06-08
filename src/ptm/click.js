var casper = require('casper').create();  
// casper.on("resource.error", function(resourceError){
//     console.log('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
//     console.log('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
// });
casper.start('https://passport.baidu.com/v2/?login', function() {  
    this.fill('div[id="login-form"]', {  
        'userName': '15857135240',  
        'password': 'abcd1234'  
    }, false);  
});  
     
casper.then(function() {  
  this.click('input[class="pass-button pass-button-submit"]');  
  this.echo('login...');  
});  
     
casper.then(function() {  
    this.wait(3000,function() {  
        this.capture("./snapshot/baidu.png");  
    });  
});  
casper.run();  
