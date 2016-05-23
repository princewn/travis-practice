$(document).ready(function(){
	classAnimate("new_post_label i","top",5);
	popoverShow("post_avatar_link","personalShow");//必须是类+id
	// popoverShow("avatar","personalShow");//必须是类+id
});

function classAnimate(className,direction,num){
/*	$("."+className+"").each().bind('mousemove',2000,function(){});*/
	$("."+className+"").mouseenter(function(){
		$(this).animate({
						top:-num+"px"
                    	},20,function(){
							$(this).mouseout(function(){
								//$(this).css({top:"0px"});时不时不起作用	
								$(this).animate({
												top:0
												},20);
							});
						})		
	});
}

function popoverShow(onWitch,witchShow){
	$("."+onWitch+"").mouseenter(function(event){
		//property会显示所有的弹出框	
		$("#"+witchShow+"").css({
								display:"block",
								position:"absolute",
								top:event.clientY+10,
								left:event.clientX+$("#"+witchShow+"").width()/2+$("body").scrollLeft()
								}).addClass("is_open").slideDown(300);
	});
	$("."+onWitch+"").mouseout(function(event){
		$("#"+witchShow+"").removeClass("is_open").addClass("down").addClass("is_close").css({
								display:"none"});
	});
}
								