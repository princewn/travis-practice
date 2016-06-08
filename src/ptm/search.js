var casper = require('casper').create();
var url = 'http://www.baidu.com/';

casper.start(url, function() {
    // 填写表单（搜索关键字）
    // 最后一个参数true表示submit
    this.fill('form#form1', { wd: 'phantomjs' }, true);
});

casper.then(function() {
    this.viewport(1366, 768);
    // 注意：这里要等待结果刷新，百度搜索结果是异步刷出来的
    this.waitFor(function check(){
        return this.evaluate(function(){
            return document.querySelectorAll('#content_left').length > 0;
        });
    }, function then(){
        console.log('./snapshot/phantomjs.png');
        this.captureSelector('./snapshot/phantomjs.png', 'body');
    });
});

casper.then(function() {
    // 填写表单（搜索关键字）
    // 注意此时form id不同于之前
    this.fill('form#form', { wd: 'casperjs' }, true);
});

casper.then(function() {
    this.viewport(1366, 768);
    this.waitFor(function check(){
        return this.evaluate(function(){
            return document.querySelectorAll('#content_left').length > 0;
        });
    }, function then(){
        console.log('./snapshot/casperjs.png');
        this.captureSelector('./snapshot/casperjs.png', 'body');
    });
});

casper.run();