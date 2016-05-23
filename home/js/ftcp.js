$(function(){
	var socket = io();
	socket.on('unitRsp', function(msg){
		$('.post_media div').remove();
		$('.post_media_photo_anchor').hide();
		$('.post_media').append($('<div class="run-result">').html(msg));
	});
	socket.on('coverRsp', function(msg){
		$('.post_media div').remove();
		$('.post_media_photo_anchor').hide();
		$('.post_media').append($('<div class="run-result">').text(msg));
	});
	$('#new_post')
	.on('click', '#new_post_label_text', unit)
	.on('click', '#new_post_label_photo', cover)
	.on('click', '#new_post_label_quote', ui)
	.on('click', '#new_post_label_audio', func)
	.on('click', '#new_post_label_video', all);
	function unit(){
		socket.emit('unit', '_________单元测试中__________');
	}
	function cover(){
		socket.emit('cover', '_________覆盖率测试中__________');
	}
	function ui(){
		location.href = 'http://localhost:3000/public/ui';
	}
	function func(){
		location.href = 'http://localhost:3000/public/func';
	}
	function all(){
		location.href = 'http://localhost:3000/public/all';
	}
});