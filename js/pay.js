//收货地址地址三级联动对象调用
$("#city").citySelect();
//收货地址设置验证
$(".dialog-close").click(function(){
	$(".mod-dialog-bg").css("display","none");
	$(".mod-dialog").css("display","none");
})
$(".console-btn-confirm").click(function(){
	$(".mod-dialog-bg").css("display","none");
	$(".mod-dialog").css("display","none");
})
if($.cookie("address")){
	var addressCookie = $.cookie("address");
	$(".consignee-blank label").html(addressCookie);
	$(".consignee-add").css("display","none");
}
$(".action-edit").click(function(){
	$(".consignee-add").css("display","block");
})
$(".consignee-btn-add").click(function(){
	$(".consignee-add").css("display","block");
})
$(".sltcate a").click(function(){
	$(this).addClass("selected").siblings().removeClass("selected");
})
$("#consigneeCancelBtn").click(function(){
	$(".consignee-add").css("display","none");
})
$(".eleRadioa .eleRadio").click(function(){
	$(this).find("span").addClass("rdc");
	$(this).find("radio").attr("checked","checked");
	$(this).siblings().find("radio").attr("checked","");
	$(this).siblings().find("span").removeClass("rdc");
	if($(this).index() ==0){
		$(".con").css("display","none");
	}else{
		$(".con").css("display","block");
	}
})
$("#consigneeAddBtn").click(function(){
	var name = $(".consignee-add-text").eq(0).val();
	var phone =$(".consignee-add-text").eq(2).val();
	var youbian =$(".consignee-add-text").eq(1).val();
	var address=$(".consignee-add-address").val();
	var city = $("#city select");
	if(!isChinaName(name)){
		$(".mod-dialog-bg").css("display","block");
		$(".mod-dialog").css("display","block");
	    $(".dialog-content p").html("请输入正确的中国汉字姓名");
	    return false;
	}else if(address==""){
		$(".mod-dialog-bg").css("display","block");
		$(".mod-dialog").css("display","block");
	    $(".dialog-content p").html("请填写收货人地址");
	    return false;
	}else if(!isPhoneNo(phone)){
		$(".mod-dialog-bg").css("display","block");
		$(".mod-dialog").css("display","block");
	    $(".dialog-content p").html("请填写正确的手机号码");
	    return false;
	}else if(isChinaName(name)&&address!=""&&isPhoneNo(phone)){
		$(".mod-dialog-bg").css("display","block");
		$(".mod-dialog").css("display","block");
	    $(".dialog-content p").html("添加成功");
	    $(".consignee-add").css("display","none");
	    var strAddress = name+","+city.eq(0).val()+city.eq(1).val()+city.eq(2).val()+address+","+phone;	    
	    $.cookie("address", JSON.stringify(strAddress), {expires: 700, path: "/"});
	    $(".consignee-blank label").html(strAddress);
	    return false;
	}
})

// 验证中文名称
function isChinaName(name){
	var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
	return pattern.test(name);
}
// 验证手机号
function isPhoneNo(phone) { 
	var pattern = /^1[34578]\d{9}$/; 
	return pattern.test(phone); 
}
//收货地址地址三级联动对象调用结束
//商品统计
$("#gCount").html("0");
$("#zCount").html("0");
$("#tatalCount").html("0");
if($("#tatalCount").html=="0"){
	$("#orderSubmit").html("继续购物").attr("href","index.html");
}
$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"})
var goods =JSON.parse($.cookie("carts"));
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
						//购物车内容  
	                    var cont ="<li data-item_id='"+result[k].id+"' item_id='' item_count='' item_total='' class='nomgr'>"+
										"<div class='clearfix_new' style='padding:13px'>"+
											"<div class='l1'><img src='"+result[k].imgSrc+"'><span>"+result[k].goodName+"</span></div>"+
											"<div class='l2'> ¥<span class='sCount'>"+result[k].price+"</span></div>"+
											"<div class='l3'>"+
												"<div class='gcIpt'> ×<span>"+goodsKey.num+"</span></div>"+
											"</div>"+
											"<div class='l4'> ¥<span class='allCount'>"+(result[k].price)*parseInt(goodsKey.num)+"</span></div>"+
										"</div>"+
									"</li>"
						$(".cont ul").append(cont);			             
					}
				}
		    }
			var sumNum =0;
			var sumPrice =0;
			var contNum =$(".gcIpt").find("span");
			var contPrice = $(".allCount");
			for (var i=0;i<contNum.length;i++) {
				sumNum+=parseInt(contNum.eq(i).html());
			}
			for (var i=0;i<contPrice.length;i++) {
				sumPrice+=parseInt(contPrice.eq(i).html());
			}
			$("#gCount").html(sumNum);
			$("#zCount").html(sumPrice);
			$("#tatalCount").html(sumPrice);
		}
	})	
}

$("#orderSubmit").click(function(){
	if($(this).html()=="继续购物"){
		$(this).attr("href","index.html");
	}else{
		var goods = JSON.parse($.cookie("carts")); 
		for(var ki in goods){		
			delete goods[ki];
		}		
		$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"});
		$("#tanchuang").css("display","block");
		$("#tanchuang .dialog-content p").text("付款成功,2秒后跳到首页");
		setTimeout(function(){
			location.href = "index.html";
		},2000);		
	}	
})