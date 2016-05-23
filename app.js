var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var greet = express.Router();
//静态资源加载目录
app.use(express.static('home'));
app.get('/', function (req, res) {
	res.sendFile('./indexwn.html', { root : __dirname + '/home'});
});
app.get('/unit', function(req, res){
	res.sendFile('./indexwn.html', { root : __dirname + '/home'});
	var name = process.argv[2];
	var exec = require('child_process').exec;
	var child = exec('cd /', function(err, stdout, stderr) {
		exec('cd fd/www/travis-practice', function(err, stdout, stderr) {
			exec('npm run test', function(err, stdout, stderr) {
				    if (err) throw err;
				    console.log(stdout);

			});
		});
	});
});

io.on('connection', function(socket){
	socket.on('unit', function(msg){
		console.log(msg);
		var name = process.argv[2];
		var exec = require('child_process').exec;
		var child = exec('cd /', function(err, stdout, stderr) {
			exec('cd fd/www/travis-practice', function(err, stdout, stderr) {
				exec('npm run testdoc', function(err, stdout, stderr) {
					    if (err) throw err;
					    console.log(stdout);
						io.emit('unitRsp', stdout);
				});
			});
		});
	});
	socket.on('cover', function(msg){
		console.log(msg);
		var name = process.argv[2];
		var exec = require('child_process').exec;
		var child = exec('cd /', function(err, stdout, stderr) {
			exec('cd fd/www/travis-practice', function(err, stdout, stderr) {
				exec('npm run cov', function(err, stdout, stderr) {
					    if (err) throw err;
					    console.log(stdout);
						io.emit('coverRsp', stdout);
				});
			});
		});
	});
	// socket.on('unitRsp', function(stdout){
	// 	io.emit('unitRsp', stdout);
	// });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
