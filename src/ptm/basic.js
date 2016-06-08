var webPage = require('webpage');
var page = webPage.create();
var settings = {
  operation: "POST",
  encoding: "utf8",
  headers: {
    "Content-Type": "application/json"
  },
  data: JSON.stringify({
    some: "data",
    another: ["custom", "data"]
  })
};

page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
};
// page.open('https://www.baidu.com/', settings, function(status) {Page title is 页面不存在_百度搜索
page.open('https://www.taobao.com/', function(status) {
  console.log('Status: ' + status);
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is ' + title);
  phantom.exit();
});