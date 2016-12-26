//滚动时间发生时加载商品详情导航
$(window).scroll(function(){
	var scrollTop = $("html body").scrollTop();
	var thisTop =$(".gTab").offset().top;
	if(scrollTop>thisTop){
		
		$("#gInfoBar").css("top","0px");
	}else{
		$("#gInfoBar").css("top","-70px");
	}
})
$(".bigInfoimg").attr("src",$(".bigImg img").attr("src"));

//document.onmousedown = function(evt){
//	var e =evt||window.event;
//	window.event?e.cancelBubble =true:e.stopPropagation();
//	window.event?e.returnValue=false:e.preventDefault();
//	return false;
//	}
//document.oncontextmenu =function(evt){
//	var e =evt||window.event;
//	window.event?e.returnValue=false:e.preventDefault();
//	return false;	
//}
$(".cate-item").click(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
})
var goodsNum =1;
$(".increment").click(function(){
	goodsNum = parseInt($(".goodsCount").val());
	$(".decrement").removeClass("disabled");
	$(".goodsCount").val(goodsNum+1);
	goodsNum++;	
})

$(".decrement").click(function(){	
	if(goodsNum==1){
		$(".decrement").addClass("disabled");
	}else{
		$(".goodsCount").val(goodsNum-1);
		goodsNum--
		if(goodsNum==1){
			$(".decrement").addClass("disabled");
		}
	}
})
//获取商品详细信息
var goodId = $.cookie("goodsId")? JSON.parse($.cookie("goodsId")) : "1000001";
$.ajax({
	url:"../data/common/goodsInfo.json",
	type:"get",
	async:false,	
	success:function(data){
		for (var i in data) {
			for (var ki in data[i]) {
				if(data[i][ki].id ==goodId){
					$("strong").eq(0).html(data[i][ki].goodName);
					$("strong").eq(1).html("<em>￥</em>"+data[i][ki].price);
					$(".slogan span").html(data[i][ki].goodtitle);
					$(".bigImg img").attr("src",data[i][ki].imgSrc);
					$(".bigInfoimg").attr("src",data[i][ki].imgSrc);
					$(".gInfoBtn-addcart").attr("data-id",data[i][ki].id);
					var oA = "<a href='javascript:;' class='tinypic'> <img src='"+data[i][ki].imgSrc+"'></a>";
					$(".scroll-items").append(oA);
					if(data[i][ki].imgSrc1){
						var oA1 = "<a href='javascript:;' class='tinypic'> <img src='"+data[i][ki].imgSrc1+"'></a>";
						$(".scroll-items").append(oA1);
					}
					if(data[i][ki].imgSrc2){
						var oA1 = "<a href='javascript:;' class='tinypic'> <img src='"+data[i][ki].imgSrc2+"'></a>";
						$(".scroll-items").append(oA1);
					}
					if(data[i][ki].imgSrc3){
						var oA1 = "<a href='javascript:;' class='tinypic'> <img src='"+data[i][ki].imgSrc3+"'></a>";
						$(".scroll-items").append(oA1);
					}
					if(data[i][ki].imgSrc4){
						var oA1 = "<a href='javascript:;' class='tinypic'> <img src='"+data[i][ki].imgSrc4+"'></a>";
						$(".scroll-items").append(oA1);
					}
				}
			}
		}
	},
	error:function(){
		alert("加载失败");
	}
})
//点击购物车添加物品
$(".gInfoBtn-addcart").click(function(){	
    var goods = $.cookie("carts")? JSON.parse($.cookie("carts")) : {};
    n = $(".goodsCount").val();
    n = parseInt(n);
    var goodsId = $(this).attr("data-id");
	if($.cookie("carts")){
		for (var ki in goods) {
			if(goods[ki].goodsId ==goodsId){
				n += parseInt(goods[ki].num);
				delete goods[ki];	
			}
		}
	}
    var dat = new Date();
    var time =(dat.getTime())%10000000;
    var goodsInfo ={goodsId:goodsId,num:n};
    goods[time] = goodsInfo;
    $.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"});
  	var offset = $("#end").offset();
    var addcar = $(this); 
    var img = $(".tinypic img").eq(0).attr('src'); 
    var flyer = $('<img class="u-flyer" style="width:100px;height:100px;z-index:1000000;border-radius:50px" src="'+img+'">'); 
    flyer.fly({ 
        start: { 
            left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed 
            top: event.pageY-$(document).scrollTop() //开始位置（必填） 
        }, 
        end: { 
            left: offset.left, //结束位置（必填） 
            top: offset.top-$(document).scrollTop(), //结束位置（必填） 
            width: 0, //结束时宽度 
            height: 0 //结束时高度 
        }, 
        onEnd: function(){ //结束回调 
//          $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000); //提示信息 
   			contCarNum();
//          addcar.css("cursor","default").removeClass('orange').unbind('click'); 
//          this.destory(); //移除dom 
        } 
    }); 
})
//放大镜制作
//喜欢收藏
var isFa = true;
$(".favorite").click(function(){
	if(isFa){
		isFa=!isFa;
		$(this).removeClass("nofav");
		
	}else{
		$(this).addClass("nofav");
		isFa=!isFa;
	}
	
})
//喜欢收藏结束
function getPosition(obj){
	var oPos = {left:0,top:0};
	while(obj){
		oPos.left += obj.offsetLeft;
		oPos.top += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return oPos;
}

var oBox = $(".prodIntro")[0];
function FDJ(oBox){
	this.oBox =oBox;
	this.oBigBox = $(".bigInfo")[0];
    this.oBigImg = $(".bigInfoimg")[0];
	this.oMidBox =$(".bigImg")[0];
	this.oMidImg =$(".bigImg img")[0];
	this.oImageZoom =$(".image-zoom")[0];
	this.oSmallBox =$(".scroll-items")[0];
	this.aLis = $(".scroll-items img");
	this.name =null;
}
FDJ.prototype.init=function(){
	
	var _this = this;
	$(this.aLis).mouseover(function(){
		
		$(this).parent().siblings().removeClass("cur");
		$(this).parent().addClass("cur");
		$(_this.oMidImg).attr("src",$(this).attr("src"));
		$(_this.oBigImg).attr("src",$(this).attr("src"));
	})
	$(this.oMidBox).mouseover(function(){
	 	$(_this.oImageZoom).css("display","block");
	    $(_this.oBigBox).css("display","block");
	    $(_this.oMidBox).css("cursor","move");
    }
	)
	$(this.oMidBox).mouseout(function(){
		$(_this.oImageZoom).css("display","none");
		_this.oBigBox.style.display = "none";
	})
	$(this.oMidBox).mousemove(function(evt){	
		_this.move(evt);
	})
}  
FDJ.prototype.move = function(evt){
	var e = evt||window.event;       
	this.oImageZoom.style.display = "block";//解决IE的onmouseover无法实现
    this.oBigBox.style.display = "block";//解决IE的onmouseover无法实现   
	var iScrollLeft = document.documentElement.scrollLeft||document.body.scrollLeft;
	var iScrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var iLeft = iScrollLeft+e.clientX-this.oImageZoom.offsetWidth/2-getPosition(this.oMidBox).left;
    var iTop = iScrollTop+e.clientY-this.oImageZoom.offsetHeight/2-getPosition(this.oMidBox).top;
    var iSmallMaxLeft = this.oMidBox.offsetWidth - this.oImageZoom.offsetWidth;
    var iSmallMaxTop = this.oMidBox.offsetHeight - this.oImageZoom.offsetHeight;
    if(iLeft<0){
    	iLeft =0;
    }else if(iLeft>iSmallMaxLeft){
    	iLeft=iSmallMaxLeft;
    }
     if(iTop<0){
    	iTop =0;
    }else if(iTop>iSmallMaxTop){
    	iTop=iSmallMaxTop;
    }
    this.oImageZoom.style.left = iLeft +"px";
    this.oImageZoom.style.top = iTop +"px";
	this.oBigImg.style.left = -iLeft/iSmallMaxLeft*(this.oBigImg.offsetWidth-this.oBigBox.offsetWidth) + "px";
	this.oBigImg.style.top = -iTop/iSmallMaxTop*(this.oBigImg.offsetHeight-this.oBigBox.offsetHeight) + "px";
}

var fdj= new FDJ(oBox);
fdj.init();