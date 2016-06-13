$(function(){
	$('#loadImage').hide();
	var socket = io();
	socket.on('unitRsp', function(msg){
		$('#loadImage').hide();
		$('.post_media').append($('<div class="run-result">').html(msg));
	});
	socket.on('coverRsp', function(msg){
		$('#loadImage').hide();
		covFilter();
	});
	socket.on('uiRsp', function(msg){
		$('#loadImage').hide();
		$('.post_media').append($('<div class="run-result">').text('请至项目文件根目录的snapshot文件夹中查看截图'));
	});
	socket.on('funcRsp', function(msg){
		$('#loadImage').hide();
		$('.post_media').append($('<div class="run-result">').text('请至项目文件根目录的snapshot文件夹中查看截图'));
	});	
	$('#new_post')
	.on('click', '#new_post_label_text', unit)
	.on('click', '#new_post_label_photo', cover)
	.on('click', '#new_post_label_quote', ui)
	.on('click', '#new_post_label_audio', func)
	.on('click', '#new_post_label_video', all)
	.on('click', '.logo-anchor', covFilter);
	function unit(){
		socket.emit('unit', '_________单元测试中__________');
		$('#test-null').remove();		
        $('.run-result').remove();		
		$('#loadImage').show();
	}
	function cover(){
		socket.emit('cover', '_________覆盖率测试中__________');
		$('#test-null').remove();		
		$('.run-result').remove();		
		$('#loadImage').show();
	}
	function ui(){
		socket.emit('ui', '_________界面回归测试中__________');
		$('#test-null').remove();		
		$('.run-result').remove();		
		$('#loadImage').show();
	}
	function func(){
		socket.emit('func', '_________功能测试中__________');
		$('#test-null').remove();		
		$('.run-result').remove();		
		$('#loadImage').show();
	}
	function all(){
		location.href = 'http://localhost:3000/public/all';
	}
	function covFilter(){
		$('.post_media').append('<iframe frameborder="no" scrolling="no" src="../coverage/lcov-report/index.html" style="width:540px;height:540px" class="run-result"></iframe>');
	}
});




