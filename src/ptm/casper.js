
var casper = require('casper').create();
casper.start('http://casperjs.org/');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
});

// casper.then(function() {  
//     this.wait(0,function() {  
//         this.capture("./snapshot/casperjs.png");  
//     });  
// });  

casper.then(function() {  
  this.click('#link-documentation-full');  
  this.echo('login...');  
});  

casper.then(function() {  
    this.wait(3000,function() {  
        this.capture("./snapshot/功能测试.png");  
    });  
});  

casper.run();