//淡入淡出轮播图开始
var timer =null;
$(function(){
	var aAs = $("#banner .banner_img");
	
	for (var i=0;i<aAs.length;i++) {
		if(i==0){
			$(aAs[i]).eq(0).css("background","url(../img/index/banner1.jpg)");
		}else{
			$(aAs[i]).css("background","url(../img/index/banner"+(i+1)+".webp)");
		}
	}
	
	var aLis = $("#banner .tip li");	
	var x = -60;
	var iNow = 0;
	for(var j =0;j<aLis.length;j++){
		$(aLis[j]).css("margin-left",x+"px");
		x+=30;
	}
	$(aLis).click(function(){
		iNow = $(aLis).index($(this));
		lunbo(iNow)
	})

	$(".before").click(function(){
		iNow--;
		if(iNow<0){
			iNow = aAs.length-1;
		}		
		lunbo(iNow);
	})
	$(".after").click(function(){
		iNow++;
		if(iNow>aAs.length-1){
			iNow =0 ;
		}
		lunbo(iNow);
	})
    play(iNow);
	$(aAs).mouseover(function(){		
		clearInterval(timer);
	})
	$(aAs).mouseout(function(){
         play(iNow);
	})
	
//二级导航开始
    var disTop = 20;
    var posY = -19;
    var aIs =$("#banner .banner_nav i");
    var aBannerNavLi = $("#banner .banner_nav li")
    for (var i=0;i<aIs.length;i++) {
//  	aBannerNavLi[i].index = i;
    	$(aIs[i]).css("background-position-y",posY+"px");
    	$(aIs[i]).css("top",disTop+"px");
    	disTop+=54;
    	posY-=55;
    	$(aBannerNavLi[i]).mouseover(function(){
    	$(aIs[this.index]).css("background-position-x","-69px");
    	})
    	$(aBannerNavLi[i]).mouseout(function(){
    	$(aIs[$(this).index($(this))]).css("background-position-x","-9px");
    	})
    }  
    //banner二级菜单的切换开始
    var aBannerLeftNav = $("#banner .left_nav li");
    var aBannerRightNav = $("#banner .right_nav");
	$(aBannerLeftNav).mouseover(function(){		
		var index = $(this).index();
		$(aBannerRightNav).css("display","none");
		$(aBannerRightNav).eq(index).css("display","block");
		$(this).css({filter:"alpha(opacity=100)",opacity:1});
	})
    $(aBannerLeftNav).mouseout(function(){
    	var index = $(this).index();
		$(aBannerRightNav).eq(index).css("display","none");
		$(this).css({filter:"alpha(opacity=70)",opacity:0.7});		
	})
    $(aBannerRightNav).mouseover(function(){
    	var index = $(this).index()-1;
    	$(this).css("display","block");
		$(aBannerLeftNav).eq(index).css({filter:"alpha(opacity=100)",opacity:1});
    })
     $(aBannerRightNav).mouseout(function(){
		$(this).css("display","none");
		$(aBannerLeftNav).css({filter:"alpha(opacity=70)",opacity:0.7});
	})
    $("#banner .right_nav_img img").each(function(index){
     	this.src ="../img/index/banner_right_nav"+(index+1)+".webp"
    })
     //banner二级菜单的切换结束
     //part-myproducts开始
     
     //part-myproducts部分开始
	$.get("../data/index/myproducts.json",function(data){
		for(var k in data){
				$("#part-myproducts ul li img").eq(k).attr("src",data[k].src);
			}
	})
	//part-myproducts部分结束
	//part-360activity部分开始
	$.get("../data/index/activety.json",function(data){
		for (var k in data) {
			$("#part-360activity ul li img").eq(k).attr("src",data[k].src);
		}
	})
	//part-360activity部分结束
     
//楼梯部分
    
    
   
    slidePoint("part-floor_cat_360");
    for(var j = 1;j<=8;j++){
    	slidePoint("part-floor_cat_"+j);
    }
    
	var slideFilm360 = $("#part-floor_cat_360 .slider-film");
	slideFilm360.eq(1).css("display","none");
	var oA360 = $("#part-floor_cat_360 .slide-point a");
	var partRight360 = $("#part-floor_cat_360 .part-right");
	loutiACtive(partRight360,slideFilm360,oA360);
	
	
	for (var j =1;j<=8;j++) {
		var partRight1=$("#part-floor_cat_"+j+" .part-right")
		var slideFilm1 = $("#part-floor_cat_"+j+" .slider-film");
		var oA1 = $("#part-floor_cat_"+j+" .slide-point a");	
		loutiACtive(partRight1,slideFilm1,oA1);
	}
	
	//楼层右边轮播动态加载
	$.get("../data/index/f360.json",function(data){
		var arr = data;
		var f1 = $("#part-floor_cat_360 .slider-film");
		
		for (var k in arr) {
			if(k==1){		
				lcActive(arr, k, f1);
			}else{
				lcActive(arr, k, f1);
			}
		}
	})
	
	
	for (var j =2;j<=9;j++) {
		loutiRightAjax(j);
	}	
	oPartCent(360);
	for (var j = 2;j<=9;j++){		
		oPartCent(j);
		
	}
	lcName();
	
	
	$("#part-360activity").addClass("loutiNum");
	$("#part-try").addClass("loutiNum");
	$("#part-newproducts").addClass("loutiNum");
	$(".part-smart").addClass("loutiNum");
	var lts =$(".loutiNum");
	var louTis = $("#louti li");
	for (var i =0; i<louTis.length;i++) {
		louTis.eq(i).css("background","#fff url(../img/common/navdaohang.png) no-repeat -120px "+i*-40+"px");
	}
	
	var isLouTi =false;
	$("#louti li").click(function(){
		isLouTi =true;
		var index = $(this).index();
		$("#louti li span").removeClass("active");
		$("#louti li span").eq(index).addClass("active");		
		var disTop = $(".loutiNum").eq(index).offset().top-$(".loutiNum").eq(index).outerHeight()/2;
		$("html body").stop().animate({scrollTop:disTop},1000,function(){
			isLouTi =false;
		})				
	})
	if($("html body").width()<1300){
		$("#louti").css("margin-left","-630px");
	}else{
		$("#louti").css("margin-left","-660px");
	}
	$(window).scroll(function(){
		if(isLouTi==false){
			var scrollTop = parseInt($(window).scrollTop());
			var iStart = $("#part-myproducts").offset().top;
			if(scrollTop>=iStart){
				$("#louti").addClass("elevator_box_show");
			}else if(scrollTop<iStart){
				$("#louti").removeClass("elevator_box_show");
			}
			for (var i =0;i<lts.length;i++) {
				var disY = $(lts).eq(i).offset().top-$(this).outerHeight()/2;
		        if(scrollTop>disY){
				    $("#louti li span").removeClass("active");
					$("#louti li span").eq(i).addClass("active");
			    }
			} 	
		}
		
	})
})

//新品速递模块、瀑布流


newGoods();
var newGoodPage =0;
$("#part-newproducts .nomore").css("display","none");
$("#part-newproducts .showmore").on("click",function(){
	if(newGoodPage!=10){
		newGoods();
		newGoodPage++;
	}else{
		$(this).css("display","none");
		$("#part-newproducts .nomore").css("display","block");
	}			
});
$(window).scroll(function(){
	var scrollTop = $("html body").scrollTop();
	var lastTop = $("#footer").offset().top;
	if(scrollTop>lastTop-800){
		if(newGoodPage!=10){
			newGoods();	
			newGoodPage++;
		}else{
			$("#part-newproducts .showmore").css("display","none");
			$("#part-newproducts .nomore").css("display","block");
		}
		
		
	}
})
//新品速递模块、瀑布流结束
//新品动态加载
function newGoods(){
//	$("#part-newproducts ul").html("");
	var oUrl ="../data/index/newGoods.json";
	$.get(oUrl,function(data){
	    for (var i = 0;i<data.length;i++) {
	    	for (var k  in data[i]) {
	    		var oLi = $("<li></li>");
				var oA = $("<a href='goodDetail.html'></a>");
				var oDl = $("<dl class = 'new-item'></dl>");
				var oDt = $("<dt></dt>");
				var oImg = $("<img class='js-lazyload' src=''/>");				
		        oImg.attr("src",data[i][k].src);
		        oDt.append(oImg);
				var oDd1 = $("<dd class = 'title'></dd>");
				var oSpan = "<span><i class='yen'>￥</i>"+data[i][k].price+"</span>";
				var oPrice = $("<dd class = 'price'></dd>");
				oPrice.html(oSpan+data[i][k].time);	
				oDd1.html(data[i][k].title);				
				oDl.append(oDt);
				oDl.append(oDd1);
				oDl.append(oPrice);
				oA.append(oDl);
				oLi.append(oA);
				$("#part-newproducts ul").append(oLi);
	    	}
	    }	    	    
	    $("#part-newproducts dt img").on("mouseover",function(){
			var w = $(this).width();
			var h =$(this).height();
			$(this).animate({width:w+4,height:h+4},200);
			$(this).mouseout(function(){
				$(this).animate({width:w,height:h},200);
			})		
		})
	})
}
//楼梯中间数据动态加载
function lcName(){
	var aJaxUrl= "../data/index/lcName.json";	
	var lcTitle = $(".part-smart .part-title");
	var lcNav = $(".part-smart .part-hot p");
	$.get(aJaxUrl,function(data){
		var index =0;
		for (var k in data[0]) {
			lcNav.eq(index).html(data[0][k].pHtml);
			lcTitle.eq(index).html(data[0][k].title);
			index++;
		}	
	})
}
function oPartCent(i){
	var aJaxUrl= "../data/index/f"+i+"_center.json";
	if(i==360){
		var oPartCenterImg = $("#part-floor_cat_360 .part-center li img");
		var oPartCenterTitle = $("#part-floor_cat_360 .part-center li .title");
		var oPartCenterInfo = $("#part-floor_cat_360 .part-center li .info");
		var oPartCenterPrice = $("#part-floor_cat_360 .part-center li .price");
	}else{
		var oPartCenterImg = $("#part-floor_cat_"+(i-1)+" .part-center li img");
		var oPartCenterTitle = $("#part-floor_cat_"+(i-1)+" .part-center li .title");
		var oPartCenterInfo = $("#part-floor_cat_"+(i-1)+" .part-center li .info");
		var oPartCenterPrice = $("#part-floor_cat_"+(i-1)+" .part-center li .price");
	}	
	$.get(aJaxUrl,function(data){
		var index =0;
		for (var k in data[0]) {
			oPartCenterImg.eq(index).attr("src",data[0][k].src);
			oPartCenterTitle.eq(index).html(data[0][k].title);
			oPartCenterInfo.eq(index).html(data[0][k].info);
			if(data[0][k].price){
				oPartCenterPrice.eq(index).html("<i>￥</i>"+data[0][k].price);
			}
			index++;
		}	
	})
	
}
//右侧图片json动态添加
function loutiRightAjax(index){
	$.get("../data/index/f"+index+".json",function(data){			
		var arr = data;
		var f1 = $("#part-floor_cat_"+(index-1)+" .slider-film");
		for (var k in arr) {		
		if(k==1){		
			lcActive(arr, k, f1);
		}else{
			lcActive(arr, k, f1);
		}
		}
	})
}
//楼层动态加载
function loutiACtive(partRight,slideFilm,oA){
	slideFilm.eq(1).css("display","none");
		partRight.each(function(){		
		var timertest =null;			 
		timertest = lcMove(timertest,slideFilm,oA);
		$(this).mouseover(function(){
			clearInterval(timertest,slideFilm,oA);
		})
		$(this).mouseout(function(){
			timertest=lcMove(timertest,slideFilm,oA);
		})
	})
}
//楼层轮播效果
function lcActive(arr, k, f1){
	for(var i in arr[k]){						
		var oA =$("<a></a>");
		oA.attr("href",arr[k][i].href);
		var oDl =$("<dl></dl>");
		var oDt =$("<dt </dt>");
		var oImg = $("<img class='js-lazyload' src=''/>");				
		oImg.attr("src",arr[k][i].src);
		var oDd1 =$("<dd class='title'></dd>");
		oDd1.html((arr[k])[i].title);
		var oDd2 =$("<dd class='info'></dd>");
		oDd2.html((arr[k])[i].info);
		var oPrice = $("<dd class='price'></dd>");
		if((arr[k])[i].prices){
	         oPrice.html("<i class='yen'>￥"+(arr[k])[i].price+"</i><s><i class='yen'>￥"+(arr[k])[i].prices+"</s>");
		}else{
			oPrice.html("<i class='yen'>￥"+(arr[k])[i].price+"</>");
		}
		oDt.append(oImg);
		oDl.append(oDt);
	    oDl.append(oDd1);
	    oDl.append(oDd2);
	    oDl.append(oPrice);
	    oA.append(oDl);	
	    f1.eq(k).append(oA);	
	} 
}
function lcMove(timertest,slideFilm,oA){
	var iTimer=0;
	clearInterval(timertest);
	timertest=setInterval(function(){
		if(iTimer%2==0){
		slideFilm.eq(1).css("display","none");
		slideFilm.eq(0).fadeIn("slow");
		oA.eq(0).css("background","#666");
		oA.eq(1).css("background","#fff");
		}else{
		slideFilm.eq(0).css("display","none");
		slideFilm.eq(1).fadeIn("slow");	
		oA.eq(1).css("background","#666");
		oA.eq(0).css("background","#fff");
		}
		iTimer++;
	},2000)
	return timertest;
}
//轮播图点击切换效果
function lunbo(iNow){
	$("#banner .banner_img").fadeOut(1).css("z-index","1");
	$("#banner .banner_img").eq(iNow).fadeIn(1000).css("z-index","2");
	$("#banner .tip li").removeClass("active");
	$("#banner .tip li").eq(iNow).addClass("active");
}

//轮播图自动运行函数
function play(iNow){
	clearInterval(timer);
	timer = setInterval(function(){
		iNow++;
		if(iNow>$("#banner .banner_img").length-1){
			iNow =0 ;
		}
		lunbo(iNow);
	},5000);
}
//楼层亮点处理
 function slidePoint(oId){
    var aA = $("#"+oId+" .slide-point a");
	aA.eq(1).css("left","50%");
	aA.eq(1).css("margin-left","10px");
	aA.eq(1).css("background","#fff");
}
 