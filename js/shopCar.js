var cartEmpty = $("<div class='cartEmpty'><a href='index.html' title='马上去购物' class='toShoping'></a></div>");

var cartList = $("<div class='cartList'>" +
	"<div class='hd'>" +
	"<div class='col1'>商品信息</div>" +
	"<div class='col2'>单价</div>" +
	"<div class='col3'>数量</div>" +
	"<div class='col4'>小计</div>" +
	"<div class='col5'>操作</div>" +
	"</div>" +
	"<div class='bd'>" +
	"</div>" +
	"<div class='gAmount'> 商品总计：<span></span>元 </div>" +
	"<div class='btn'>" +
	"<a href='index.html' class='b1' title='继续购物' data-monitor='shopcart_continueshop_click'>继续购物</a>" +
	"<a href='##' class='b2' title='去结算' data-monitor='shopcart_placeorder_click'>去结算</a>" +
	"</div>" +
	"</div>");
	//获取购物车内容开始	
$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"})
var goods = $.cookie("carts")? JSON.parse($.cookie("carts")) : {};
if($.cookie("carts")=="{}"||!$.cookie("carts")){
	$(".bd").eq(0).html(cartEmpty);
}else{
	$(".bd").eq(0).html(cartList);
	for (var j in goods) {
		goodsKey =goods[j];	
		$.ajax({
			url:"../data/common/goodsInfo.json",
			type:"get",
			async:false,
			success:function(data){
				for (var i=0;i<data.length;i++) {
					var result = data[i]				
					for (var k in result ) {	
						if(result[k].id == goodsKey.goodsId){									
							// goodId goodName goodtitle num price img(src)	
							//购物车内容  
		                    var wrap_row = $("<div class='wrap_row' data-item_id='"+result[k].id+"'>" +
							"<div class='row' data-item_id='' data-limit='100' data-store='859'>" +
							"<div class='r1'> <img class='item-img' src='"+result[k].imgSrc+"'>" +
							"<a class='item-namexx' href='' target='_blank'>"+result[k].goodName+"</a>" +
							"</div>" +
							"<div class='r2'><span>"+result[k].price+"</span>元</div>" +
							"<div class='r3'>" +
							"<div class='gcIpt' data-monitor='shopcart_number_click'>" +
							"<a href='javascript:void(0);' class='decrement'></a><input type='text' class='goodsCount' value='"+goodsKey.num+"'>" +
							"<a href='javascript:void(0);' class='increment'></a>" +
							"</div>" +
							"<div class='errTip'>已达到最大购买数量</div>" +
							"</div>" +
							"<div class='r4'><span>"+(result[k].price)*parseInt(goodsKey.num)+"</span>元</div>" +
							"<div class='r5'>" +
							"<a href='javascript:void(0);' data-monitor='shopcart_delete_click' class='delOrder' item_id='5747bdc0e059bf20d2197eb4'>删除</a>" +
							"</div>" +
							"</div>" +
							"</div>");
							$(".cartList").find(".bd").append(wrap_row);			             
						}
					}
			   }
			}
		})	
	}
	 
	var xj =$(".r4 span");
	var sum = 0;
	for (var num =0;num<xj.length;num++) {
		sum +=Number(xj.eq(num).html());
	}
	$(".delOrder").click(function() {	
		var goods = JSON.parse($.cookie("carts"));
		var goodId = $(this).parent().parent().parent().attr("data-item_id");
		$(this).parent().parent().parent().remove();
		var sumPrice = parseInt($(".gAmount span").html())-parseInt($(this).parent().parent().parent().find(".r4 span").html());
		$(".gAmount span").html(sumPrice);
		for(var ki in goods){
			if(goods[ki].goodsId==goodId){
				delete goods[ki];
			}
		}		
		$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"});
		if($.cookie("carts")=="{}"){
		$(".bd").eq(0).html(cartEmpty);
		}		
	})
	//数量-
	$(".decrement").click(function(){
		var cont = $(this).parent().find(".goodsCount");
		var danjia =Number($(this).parent().parent().parent().find(".r2 span").html());
		var heji = $(this).parent().parent().parent().find(".r4 span");
		if(parseInt(cont.val())>0){
		cont.val(parseInt($(cont).val())-1);	
		heji.html(parseInt(cont.val())*danjia);
		sum-=danjia;
		$(".gAmount span").html(sum);
		}
		var goods = JSON.parse($.cookie("carts"));
		var goodId = $(this).parent().parent().parent().parent().attr("data-item_id");
		for(var ki in goods){
			if(goods[ki].goodsId==goodId){
			   goods[ki].num = parseInt($(cont).val());
			}
		}
		$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"});
	})
	//数量+
	$(".increment").click(function(){
		var cont = $(this).parent().find(".goodsCount");
		var danjia =Number($(this).parent().parent().parent().find(".r2 span").html());
		var heji = $(this).parent().parent().parent().find(".r4 span ");		
		cont.val(parseInt($(cont).val())+1);
		heji.html(parseInt(cont.val())*danjia);
		sum+=danjia;
		$(".gAmount span").html(sum);
		var goods = JSON.parse($.cookie("carts"));
		var goodId = $(this).parent().parent().parent().parent().attr("data-item_id");
		for(var ki in goods){
			if(goods[ki].goodsId==goodId){
			   goods[ki].num = parseInt($(cont).val());
			}
		}
		$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"});
	})
	$(".gAmount span").html(sum);
	$(".row input").attr("disabled","true");
		//结算
	$('.b2').click(function() {
		if($(".userTopName").html()!=""){
			$(".bd").eq(0).html(cartEmpty);
			$(this).attr("href","pay.html");
		}else{
			$("#login").css("display","block");
		}		
	})	
	// 删除
}
//获取购物车内容结束



