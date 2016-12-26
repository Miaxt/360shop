////获取body中的元素
//var oDiv = $("#lunbo");
//var oUl = $("#lunbo .box")[0];//使用封装的函数处理兼容问题，根据类名获取元素
//var aLis = $("li");//根据父级元素获取子元素
//var oNav = $(".nav")[0];//使用封装的函数处理兼容问题，根据类名获取元素
//var aDiv = $("#lunbo .nav div");//根据父级元素获取子元素
//var oPrev = $("prev")[0];//使用封装的函数处理兼容问题，根据类名获取元素
//var oNext = $(".next")[0];//使用封装的函数处理兼容问题，根据类名获取元素
////设置ul的宽度使div横排排列
//var oFirst = $(aLis).eq(0).clone(true);//生成一个元素和原数组第一个元素相同，使用克隆否则原数组将被破坏
//var oLast = .clone(true);//生成一个元素和原数组最后一个元素相同，使用克隆否则原数组将被破坏
//
//oUl.appendChild(oFirst);//将生成的元素插在原数组最后一个使得首尾相接
//oUl.insertBefore(oLast,aLis[0]);//将生成的元素插在原数组第一个使得尾首相接
//oUl.style.width = aLis[0].offsetWidth*(aLis.length+2)+"px";//改变原有的ul长度使的元素float属性生效
//oUl.style.left = -aLis[0].offsetWidth+"px";//默认显示的首位置
//var len = aLis.length;//统计数组的现在的长度
//var iNow = 1;//定义一个全局的标志型变量，用于获取元素的下标
//
//function WuFengLunBo(){
//	
//}
//WuFengLunBo.prototype.init = function(){
//	var _this = this;
//	oPrev.onclick = function(){
//		iNow--;
//		_this.tab();
//	}
//	oNext.onclick = function(){
//		iNow++;
//		_this.tab();
//	}
//	this.tab();
//	for(var i =0;i<aLis.length;i++){
//		aLis[i].index = i;
//		aLis[i].style.float = "left";
//		aLis[i].onmouseover = function(){
//			iNow = this.index;//获取下标传递给运动函数
//			_this.tab();
//	}	
//	}
//	for(var i =0;i<aDiv.length;i++){
//		aDiv[i].index = i;
//		aDiv[i].onclick = function(){
//			iNow =this.index+1;
//			_this.tab();
//		}
//	}
//	oDiv.onmouseover = function(){
//		clearInterval(this.timer);//鼠标移动到滚动的div上时停止定时器
//	}
//	oDiv.onmouseout = function(){
//		_this.zd();//鼠标移开时自动滚动播放
//	}
//}
//	
//WuFengLunBo.prototype.zd=function(){//定义一个自动滚动播放的函数
//	var _this = this;
//	clearInterval(oDiv.timer);
//	oDiv.timer=setInterval(function(){
//		iNow++;
//		_this.tab();	
//		},2000);
//	}	
//WuFengLunBo.prototype.tab=function(){
//	if(iNow==-1) {//处理边界元素，使在边界时候原来的UL left瞬间变化
//		oUl.style.left = -(len-2)*aLis[0].offsetWidth+"px";
//		iNow = len - 3;
//	}
//	if(iNow==aLis.length) {//处理边界元素，使在边界时候原来的UL left瞬间变化
//	oUl.style.left = -aLis[0].offsetWidth+"px";
//	iNow = 2;
//	}
//	var navIndex = 0;
//	if(iNow==0){
//	navIndex = aLis.length-3;				
//	}else if(iNow==aLis.length-1){
//	navIndex =0;
//	}else{
//		navIndex = iNow-1;
//	}
//	for(var i =0;i<aDiv.length;i++){
//		aDiv[i].className = "";	
//	}	
//	console.log(iNow);
//	aDiv[navIndex].className = "active";
//	var dis =-iNow*aLis[0].offsetWidth;//获取现在的left值
//	startMove(oUl,{"left":dis});//让元素做匀速运动				
//}
//
//var wflb = new WuFengLunBo();
//wflb.init();
