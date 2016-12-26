$(function(){
	$(".banner-item").eq(3).css("border-right","none")
	$(".weixin").mouseover(function(){
		$(".weixin span").css({display:"block",zIndex:10});
	})
	$(".weixin").mouseout(function(){
		$(".weixin span").css("display","none");
	})
	$(".weibo").mouseover(function(){
		$(".weibo span").css("display","block");
	})
	$(".weibo").mouseout(function(){
		$(".weibo span").css("display","none");
	})
	for (var i=0;i<4;i++) {
		$("#slidebar li").eq(i).css("background","#fff url(../img/common/rightbar.png) no-repeat 0 "+(i+1)*-40+"px")
	}
	$("#slidebar li div").eq(0).css("top","-40px");
	$("#slidebar li").mouseover(function(){
		var index = $(this).index();
		if(index == 1||index ==2){
			$("#slidebar li div").eq(index-1).css("display","block");
		}
		$("#slidebar li a").eq(index).css("display","block");
	});
	$("#slidebar li").mouseout(function(){
		var index = $(this).index();
		if(index == 1||index ==2){
			$("#slidebar li div").eq(index-1).css("display","none");
		}
		$("#slidebar li a").eq(index).css("display","none");
	});
	
})