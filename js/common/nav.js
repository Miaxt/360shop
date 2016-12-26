//动态处理二级菜单开始
function createSencondNav(result,oUl){
	var length =0;	
	for(var i in result ){
		if(length<5){
			var oA = $("<a></a>");
			var aLi =$("<li></li>");
			var oImg = $("<img />")
			var oSpan = $("<span></span>");
			var oI = $("<i></i>");
			oImg.attr("src",result[i].imgSrc);
			oSpan.html(result[i].goodName);
			oI.html(result[i].price+"元");
	        oA.attr("href","goodDetail.html");
	        oA.attr("data-id",result[i].id);
			oA.append(oImg);
			oA.append(oSpan);
			oA.append(oI);
			aLi.append(oA)
			$(oUl).append(aLi);
			var lists =$(oUl).find("li");
			for (var i =0;i<lists.length;i++) {
				lists.eq(i).addClass("right_border");
				if(i==lists.length-1){
					lists.eq(i).removeClass("right_border");
				}
			}
			length++;
	}
	}
        $("#navbox .secondNav a").click(function(){
 		var goodsId = $(this).attr("data-id");
		$.cookie("goodsId", JSON.stringify(goodsId), {expires: 7,path: "/"});
        })
        //点击时设置cookie结束
}
function sencondNav(index){
    var oUl =$("#navbox .secondNav ul");
	$.get({
		url:"../data/common/goodsInfo.json",
		isAsync:true,// true or false
		success:function(data){		
			var result = data[index];
			var isDown = $(oUl).find("li");
			if(isDown.length==0){
			   createSencondNav(result,oUl);
			}else{
				oUl.html("");
				createSencondNav(result,oUl);
			}
			
		},
		error:function(data){
			console.log(data);
		}
	})	
}
//动态处理二级菜单结束

$(function(){
    var oNav = document.getElementById("navbox");
	var oDiv =oNav.getElementsByTagName("div")[0];
	var oDiv1 =oNav.getElementsByTagName("div")[1];
	var oUl1 = oDiv1.getElementsByTagName("ul")[0];
    var oUl = oDiv.getElementsByTagName("ul")[0];
    var lists = oUl.getElementsByTagName("li");
//  var lists = $("#navbox .secondNav li")
    var navDown = false;
    //动态二级导航的触发与生成开始
    for(var i = 1;i<lists.length;i++){
    	if(i>=lists.length-5){
    		$(lists).eq(i).mouseover(function(){
    			$(".secondNav").slideUp("slow");
    		})
    	}else{
    	var page = 0;
    	lists[i].index = i;
    	$(lists).eq(i).mouseover(function(evt){   		
    		var e =evt||window.event;
			window.event?e.cancelBubble =true:e.stopPropagation();
			window.event?e.returnValue=false:e.preventDefault();				
    		//oDiv1.style.display = "block";
			$("#navbox .secondNav").stop().slideDown("slow");		
    		page = this.index; 
    		sencondNav(page-1);
//		   	var aA = $(oUl1).find("a"); 	
//          for (var i =0;i<aA.length;i++) {
//          	aA[i].index = i;
//          	aA[i].click(function(){
//                  var name = (this.getElementsByTagName("span")[0].innerHTML).toString();                  
//                  setCookie("name",name,10);
//          	})
//          }     
			//点击时设置cookie开始

    	})
    }

    }   
    $("#navbox").mouseout(function(){	
		var s = event.toElement || event.relatedTarget; 
        if (!this.contains(s)) {
        	$(".secondNav").stop().slideUp("slow");
        }			
	})
    //动态二级导航的触发与生成结束
    //吸顶菜单
	var fixTop = $("#navbox").offset().top;
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		if(scrollTop>=fixTop) {
				$("#navbox").css({position: "fixed", top: 0});
				$("#navbox").css("z-index", "200");
			} else {
				$("#navbox").css("position", "relative");
			}
	})

	
 }) 
