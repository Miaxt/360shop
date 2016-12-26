//百度搜索接口开始		
$(function(){
	var searchInput = $("#logo input");
	searchInput.keyup(function(){
		$.ajax({
			dataType:"jsonp",
			async:false,
			url:"https:sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+searchInput.val()+"&json=1&p=3",
		    jsonp:"cb",
		    success:function(data){
		    	var lists = data.g;
		    	var tipList = $("#logo ul");
		    	tipList.html("");
	    		for(var i in lists) {
					var oLi = $("<li></li>");
					oLi.html(lists[i].q);
					tipList.append(oLi);
					$("#logo ul li").click(function(){						
						$("#logo .seach").val($(this).html());
						tipList.html("");
					})
					$("#logo ul li").mouseover(function(){
						$(this).css("background","#ccc").siblings().css("background","#fff")
					})
					$(document).click(function(){
						tipList.html("");
					})
				}
		    }
	    });
	    
	})
	
})
//百度搜索接口结束
//登录注册
$(".userTopName").html($.cookie("userName"));
if($(".userTopName").html() != "") {
	$(".login a").html("注销");
	$(".regist a").html("");
} else {
	$(".login a").html("登录");
}
$(".login").click(function() {
	if($(".userTopName").html() != "") {
		$(".userTopName").html("");
		$(".login a").html("登录");
		$(".regist a").html("注册");
		$.cookie("userName","",{expires: 7, path: "/"});
		if($(".content mall_head")){
			location.href ="index.html";
		}
	} else {
		$("#login").css("display", "block");
	}
})
$(".regist").click(function(){
	$("#regist").css("display","block");	
})
//统计购物车商品数量
function contCarNum(){
	var goodsCar = $.cookie("carts")? JSON.parse($.cookie("carts")) : {};
	var num =0;
	for (var ki in goodsCar) {
		num+=goodsCar[ki].num;
	}
	$(".carSize").html("("+num+")");
}
contCarNum();
//轮播广告
wufenglunbo();
function wufenglunbo(){//无缝轮播
	var iNow = 1;
	var timer = null;
	var len = $("#lunbo .box li").length;
	var iLiWidth = parseInt($("#lunbo .box li").eq(0).css("width"));
	var li1 = $("#lunbo .box li").eq(0).clone(true);
	var li2 = $("#lunbo .box li").eq($("#lunbo .box img").length-1).clone(true);
	$("#lunbo .box").append(li1);
	$("#lunbo .box").prepend(li2);
	len = len + 2;
	$("#lunbo .box").css({"width":parseInt($("#lunbo .box li").eq(0).css("width"))*len+"px","left":-iLiWidth+"px"});
	autoPlay();
	$("#lunbo").mouseover(function() {
			clearInterval(timer);
		})
	$("#lunbo").mouseout(function() {
			autoPlay();
	})
	var iSOk = false;
	$("#lunbo .prev").click(function() {
		if(iSOk==false){
			iNow--;
			if(iNow == -1) {
				$("#lunbo .box").css({left:-(len-2)*iLiWidth+"px"});
				iNow = len - 3;
			}
			tab();
		}
	})
	$("#lunbo .next").click(function() {
		if(iSOk==false){
			iNow++;
			if(iNow == len) {
				$("#lunbo .box").css({"left":-iLiWidth+"px"});
				iNow = 2;
			}
			tab();
		}
		
	})
	$("#lunbo .nav div").click(function() {
		iNow = $(this).index()+1;
		tab();
	})
	function autoPlay() {
		clearInterval(timer);
		timer = setInterval(function() {
			iNow++;
			if(iNow == len) {
				$("#lunbo .box").css({"left":-iLiWidth+"px"});
				iNow = 2;
			}
			tab();
		},2000);
	}
	function tab() {
		iSOk =true;
		$("#lunbo .nav div").removeClass("active");
		var navIndex = 0;
		if(iNow == 0) {
			navIndex = len - 3;
		}else if(iNow == len - 1) {
			navIndex = 0;
		}else{
			navIndex = iNow - 1;
		}
		$("#lunbo .nav div").eq(navIndex).addClass("active");
		var dis = -iNow*parseInt(iLiWidth);
		$("#lunbo .box").animate({"left":dis+"px"},500,function(){
			iSOk =false;
		});
	}
}
//轮播广告结束
//弹窗处理
$("#tanchuang .console-btn-confirm").click(function(){
	$("#tanchuang").css("display","none");
})
$("#tanchuang .dialog-close").click(function(){
	$("#tanchuang").css("display","none");
})
//购物车效果
$(window).scroll(function(){
	var scrollTop = $("html body").scrollTop();
	if(scrollTop>320){
		$("#logo .myShopCar").css("position","fixed");
		$("#logo .myShopCar").css({top:"80px",right:"20px"});
	}else{
		$("#logo .myShopCar").css("position","absolute");
		$("#logo .myShopCar").css({top:"40px",right:"0px"});
		
	}
})
//$(function() { 
//  var offset = $("#end").offset(); 
//  $(".addcar").click(function(event){ 
//      var addcar = $(this); 
//      var img = addcar.parent().find('img').attr('src'); 
//      var flyer = $('<img class="u-flyer" src="'+img+'">'); 
//      flyer.fly({ 
//          start: { 
//              left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed 
//              top: event.pageY //开始位置（必填） 
//          }, 
//          end: { 
//              left: offset.left+10, //结束位置（必填） 
//              top: offset.top+10, //结束位置（必填） 
//              width: 0, //结束时宽度 
//              height: 0 //结束时高度 
//          }, 
//          onEnd: function(){ //结束回调 
//              $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000); //提示信息 
//              addcar.css("cursor","default").removeClass('orange').unbind('click'); 
//              this.destory(); //移除dom 
//          } 
//      }); 
//  }); 
//}); 