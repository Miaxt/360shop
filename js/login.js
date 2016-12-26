$(".quc-link").eq(0).css("display", "inline-block");
$(".quc-link").eq(1).css("display", "inline-block");
$(".quc-link").eq(1).css("border", "none");
$(".quc-link").eq(2).css("display", "none");
$(".xx-cheak").parent().css("width", "115px");
$(".quc-panel-close").click(function() {
	$("#login").css("display", "none");
})
var loginMothod = true;
$(".quc-sign-in-nav a").click(function() {
	$(this).addClass("quc-current").siblings().removeClass("quc-current");
	$(".xx-name").val("");
	if($(this).index() == 1) {
		loginMothod = false;
		$(".quc-label").eq(0).html("手机号");
		$(".xx-cheak").css("width", "247px");
		$(".change").css("display", "none");
		$(".xx-name").addClass("xx-namechange");
		$(".xx-name").attr("placeholder", "请输入手机号");
		$(".freecheak").css("display", "block");
		$(".quc-input-long").eq(1).css("display", "none");
		$(".quc-footer .quc-link").eq(2).css("display", "inline-block");
		$(".quc-link").eq(2).css("border", "none");
		$(".quc-footer .quc-link").eq(1).css("display", "none");
		$(".cheak").css("display", "none");
	} else {
		$(".cheak").css("display", "block");
		$(".change").css("display", "block");
		$(".xx-cheak").css("width", "110px");
		$(".xx-name").attr("placeholder", "手机号/用户名/邮箱");
		$(".freecheak").css("display", "none");
		$(".xx-name").removeClass("xx-namechange");
		$(".quc-label").eq(0).html("账&nbsp;&nbsp;&nbsp;号");
		$(".quc-input-long").eq(1).css("display", "block");
		$(".quc-footer .quc-link").eq(1).css("display", "inline-block");
		$(".quc-footer .quc-link").eq(2).css("display", "none");
		$(".quc-footer .quc-link").eq(1).css("border", "none");
		yzm(4);
		$(".xx-cheak").val("");
	}

})
$(".quc-input").focus(function() {
	$(this).parent().addClass("quc-input-bg-focus");
})
$(".quc-input").blur(function() {
	$(".quc-input-bg").removeClass("quc-input-bg-focus");
})

$(".xx-name").keyup(function() {
	if(loginMothod == false) {
		phone($(this));
	}
})
$(".xx-name").keyup(function(){
	if(loginMothod) {
		nameCheak($(this));
	}
})
$(".xx-pwd").keyup(function() {
	if(loginMothod) {
		pwdCheak($(this), $(".xx-name"));
	}
})
$(".xx-cheak").keyup(function() {
	if(loginMothod == false) {
		pwd($(this));
	}
})

yzm(4);
$(".xx-cheak").keyup(function() {
	yzmCheak($(this));
})
$(".change").click(function() {
	yzm(4);
})
$(".freecheak").click(function() {
	$(".xx-cheak").val(yzm(6));

})

var login = false;
var kName = false;
var kPwd = false;
var kPhone = false;
var kCheak = false;
var kYzm = false;
$(".quc-form").submit(function() {
	if((kPhone && loginMothod == false) || (loginMothod == true && kName == true && kPwd == true && kYzm == true)) {
		login = true;
	}
	if(login == false){
		return false;
	}else {
		$.cookie("userName", $(".xx-name").val(),{expires: 7, path: "/"});		
	}
})
function yzmCheak(yzm) {
	var ts = $(".quc-tip");
	var str1 = $(".cheak").html();
	var str2 = yzm.val();
	if(str1 == str2) {
		ts.html("");
		kYzm = true;
	} else {
		ts.html("验证码错误");
		kYzm = false;
	}
}
function pwdCheak(oPwd, oName) {
	var ts = $(".quc-tip");
	var str = oPwd.val();
	var strName = oName.val();
	str = str.replace(/ /g, "");
	oPwd.val(str);
	if(str != "") {
		if($.cookie("userInfo")&&$.cookie("userInfo")!="{}"){
			var uesrInfomation = $.cookie("userInfo")? JSON.parse($.cookie("userInfo")) : {};
			if(uesrInfomation!="{}"){
				for (var ki in uesrInfomation) {
					if(uesrInfomation[ki].userName==strName&&uesrInfomation[ki].pwd){
						kPwd = true;
						ts.html("");
						return false;
					}else{
						kPwd = false;
						ts.html("密码错误");
					}
				}
			}
		}else{
			$.ajax({
				url: "../data/login/info.json",
				async: true,
				type: "get",
				//	   data: {name: str, pwd: "123456"},
				success: function(data) {
					for(var k in data) {
						if(strName == data[k].userName && str == data[k].passWord) {
							kPwd = true;
							ts.html("");
							return false;
						} else {
							ts.html("密码错误");
							kPwd = false;
						}
					}
				},
				error: function(data) {
					console.log(data);
				}
			});
	    }
	} else {
		ts.html("密码不能为空");;
	}
}
var uesrInfomation = $.cookie("userInfo")? JSON.parse($.cookie("userInfo")) : {};
function nameCheak(oName) {
	var ts = $(".quc-tip");
	var str = oName.val();
	str = str.replace(/ /g, "");
	oName.val(str);
	var str1 = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
	var str2 = /^[a-zA-z]\w{6,15}$/;
	var str3 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
	if(str1.test(str) || str2.test(str) || str3.test(str)) {
		ts.html("");
		if($.cookie("userInfo")&&$.cookie("userInfo")!="{}"){
			var uesrInfomation = $.cookie("userInfo")? JSON.parse($.cookie("userInfo")) : {};
			if(uesrInfomation!="{}"){
				for (var ki in uesrInfomation) {
					if(uesrInfomation[ki].userName==str){
						kName = true;
						ts.html("");
						return false;						
					}else{
						kName = false;
						ts.html("账号不存在");
					}
				}
			}
		}else{
			$.ajax({
				url: "../data/login/info.json",
				async: true,
				type: "get",
				data: {
					name: str,
					pwd: "123456"
				},
				success: function(data) {
					for(var k in data) {
						if(str == data[k].userName) {
							kName = true;
							ts.html("");
							return false;
						} else {
							kName = false;
							ts.html("账号不存在");
						}
					}
				},
				error: function(data) {
					console.log(data);
				}
			});
		}	
	} else {
		ts.html("账号格式有误");;
	}
}

function phone(oPhone) {
	var ts = $(".quc-tip");
	var str = oPhone.val();
	str = str.replace(/ /g, "");
	oPhone.val(str);
	var str1 = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
	if(str1.test(str)) {
		kPhone = true;
		ts.html("");
	} else {
		ts.html("手机号格式有误");;
	}
}

function yzm(num) {
	var yanzheng = $(".cheak");
	var str = "";
	for(var i = 1; i <= num; i++) {
		str += parseInt(Math.random() * 10);
	}
	yanzheng.html(str);
	return str;
}

function pwd(oPwd) {
	var ts = $(".quc-tip");
	var str = oPwd.val();
	str = str.replace(/ /g, "");
	oPwd.val(str);
	var str1 = /^[0-9]{6}$/;
	if(str1.test(str)) {
		ts.html("");
	} else {
		ts.html("手机验证码错误");
	}
}
