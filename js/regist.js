var strReg1 = $(""+
"<p class='quc-field quc-field-mobile quc-input-long'>"+
"	<label class='quc-label' for='quc_account_258688596'>手机号</label>"+
"	<span class='quc-input-bg'>"+
"		<input class='quc-input quc-input-mobile' type='tel' name='account' data-name='mobile' maxlength='11' id='quc_account_258688596'></span>"+
"	<i class='quc-tip-icon'></i>"+
"	<span class='quc-tip' data-default-tip='请输入您的手机号'>请输入您的手机号</span>"+
"</p>"+
"<p class='quc-field quc-field-captcha quc-input-short' style='display: block;'>"+
"	<label class='quc-label' for='quc_captcha_258688597'>验证码</label>"+
"	<span class='quc-input-bg'>"+
"		<input class='quc-input quc-input-captcha' type='text' name='captcha' maxlength='7' autocomplete='off' id='quc_captcha_258688597'></span>"+
"	<s class='quc-captcha-img quc-captcha-change' alt='验证码' title='点击更换' tabindex='99' style='font-size: 20px;' ></s>"+
"	<a class='quc-link quc-link-captcha-change quc-captcha-change' href='#'>换一张</a>"+
"	<i class='quc-tip-icon'></i>"+
"	<span class='quc-tip' data-default-tip='请输入右边的字母或数字，不区分大小写'>请输入图中的字母或数字，不区分大小写</span></p>"+
"<p class='quc-field quc-field-sms-token quc-input-middle quc-clearfix'>"+
"	<label class='quc-label' for='quc_smscode_258688598'>校验码</label>"+
"	<span class='quc-input-bg'>"+
"				<input class='quc-input quc-input-sms-token' type='text' name='smscode' data-name='smsToken' maxlength='6' id='quc_smscode_258688598'></span>"+
"	<a href='#' class='quc-button quc-button-blue quc-get-sms-token'>免费获取校验码</a>"+
"	<i class='quc-tip-icon'></i>"+
"	<span class='quc-tip' data-default-tip='请输入短信中6位数字校验码'>请输入短信中6位数字校验码</span>"+
"	<a class='quc-mobile-tip quc-link' href='http://i.360.cn/help/smscode' target='_blank' tabindex='99'>校验码常见问题</a>"+
"</p>"+
"<p class='quc-field quc-field-username quc-input-long'>"+
"	<label class='quc-label' for='quc_userName_258688599'>用户名</label>"+
"	<span class='quc-input-bg'>"+
"						<input class='quc-input quc-input-username' type='text' name='userName' data-name='username' maxlength='14' id='quc_userName_258688599'></span>"+
"	<i class='quc-tip-icon'></i>"+
"	<span class='quc-tip' data-default-tip='2-14个字符：英文、数字或中文'>2-14个字符：英文、数字或中文</span>"+
"</p>"+
"<p class='quc-field quc-field-password quc-input-long'>"+
"	<label class='quc-label' for='quc_password_258688600'>密码</label>"+
"	<span class='quc-input-bg'>"+
"		<input class='quc-input quc-input-password' type='password' name='password' maxlength='20' id='quc_password_258688600'>"+
"	</span>"+
"	<i class='quc-tip-icon'></i>"+
"	<span class='quc-tip' data-default-tip='6-20个字符(区分大小写)'>6-20个字符(区分大小写)</span>"+
"</p>"+
"<p class='quc-field quc-field-password-again quc-input-long'>"+
"	<label class='quc-label' for='quc_passwordAgain_258688601'>确认密码</label>"+
"	<span class='quc-input-bg'>"+
"						<input class='quc-input quc-input-password-again' type='password' name='passwordAgain' maxlength='20' id='quc_passwordAgain_258688601'>"+
"					</span>"+
"	<i class='quc-tip-icon'></i>"+
"	<span class='quc-tip' data-default-tip='请再次输入密码'>请再次输入密码</span>"+
"</p>")
var strReg2 =$("<p class='quc-field quc-field-email quc-input-long quc-field quc-field-mobile quc-input-long'>"+
"	<label class='quc-label' for='quc_account_258688647'>邮箱</label><span class='quc-input-bg'><input class='quc-input quc-input-email' type='text' name='account' data-name='email' autocomplete='off' id='quc_account_258688647'></span><i class='quc-tip-icon'></i><span class='quc-tip' data-default-tip='请输入您的常用邮箱，<a>没有邮箱？</a>'>请输入您的常用邮箱，<a class='quc-link' href='http://email.163.com/' target='_blank' tabindex='99'>没有邮箱？</a></span></p>"+
"<p class='quc-field quc-field-username quc-input-long'><label class='quc-label' for='quc_userName_258688648'>用户名</label><span class='quc-input-bg'><input class='quc-input quc-input-username' type='text' name='userName' data-name='username' maxlength='14' id='quc_userName_258688648'></span><i class='quc-tip-icon'></i><span class='quc-tip' data-default-tip='2-14个字符：英文、数字或中文'>2-14个字符：英文、数字或中文</span></p>"+
"<p class='quc-field quc-field-password quc-input-long'><label class='quc-label' for='quc_password_258688649'>密码</label><span class='quc-input-bg'><input class='quc-input quc-input-password' type='password' name='password' maxlength='20' id='quc_password_258688649'></span><i class='quc-tip-icon'></i><span class='quc-tip' data-default-tip='6-20个字符(区分大小写)'>6-20个字符(区分大小写)</span></p>"+
"<p class='quc-field quc-field-password-again quc-input-long'><label class='quc-label' for='quc_passwordAgain_258688650'>确认密码</label><span class='quc-input-bg'><input class='quc-input quc-input-password-again' type='password' name='passwordAgain' maxlength='20' id='quc_passwordAgain_258688650'></span><i class='quc-tip-icon'></i><span class='quc-tip' data-default-tip='请再次输入密码'>请再次输入密码</span></p>"+
"<p class='quc-field quc-field-captcha quc-input-short' style='display: block;'><label class='quc-label' for='quc_captcha_258688651'>验证码</label><span class='quc-input-bg'><input class='quc-input quc-input-captcha' type='text' name='captcha' maxlength='7' autocomplete='off' id='quc_captcha_258688651'></span>"+
"	<s class='quc-captcha-img quc-captcha-change' alt='验证码' title='点击更换' tabindex='99' style='font-size: 20px;'></s>"+
"	<a class='quc-link quc-link-captcha-change quc-captcha-change' href='#'>换一张</a><i class='quc-tip-icon'></i><span class='quc-tip' data-default-tip='请输入图中的字母或数字，不区分大小写'>请输入图中的字母或数字，不区分大小写</span></p>")
$(".quc-form div").html(strReg1);

autoYz();
function autoYz(){
	aQucTips = $("#regist .quc-form .quc-tip");
	aQucInputs = $("#regist .quc-form .quc-input");
	aQucIs = $("#regist .quc-form .quc-tip-icon");
	for(var i = 0; i < aQucInputs.length; i++) {
	aQucInputs.eq(i).keyup(function() {
		var index = $(this).parent().parent().index(); 
		if(isChoice==0){
			cheakAll(this,index);
		}else{
			cheakEmailAll(this,index);
		}		
	})
	}
}
$("#regist .quc-panel-closeReg").click(function(){
	$("#regist").css("display","none");
	$(".quc-tip").html("");
	$(".quc-input").val("");
	$(".quc-tip-icon").removeClass("quc-tip-icon-incorrect").removeClass("quc-tip-icon-correct");
	$(".quc-input-bg").removeClass("quc-input-bg-incorrect");
})
var aQucTips = $("#regist .quc-form .quc-tip");
var aQucInputs = $("#regist .quc-form .quc-input");
var aQucIs = $("#regist .quc-form .quc-tip-icon");
$("#regist .quc-sign-up-type li").click(function() {
	$("#regist .quc-sign-up-type li").removeClass("quc-current");
	$(this).addClass("#regist quc-current");
	if($(this).index()==0){
		$("#regist .quc-form div").html(strReg1);
	}else{
		$("#regist .quc-form div").html(strReg2);
	}
    autoYz();
	dsYZM();
})
dsYZM();

function dsYZM(){
	$("#regist .quc-captcha-change").eq(0).html(changYZM());
	$("#regist .quc-captcha-change").eq(0).css("color","rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256));
	$("#regist .quc-captcha-change").click(function(){
		var val = changYZM();
		$("#regist .quc-captcha-change").eq(0).html(val);
		$("#regist .quc-captcha-change").eq(0).css("color","rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256));
	})
	$("#regist .quc-get-sms-token").click(function(){
		var strJYM = "";
		for (var i =0;i<6;i++) {
			strJYM += parseInt(Math.random()*10);
		}
		$("#regist .quc-input-sms-token").val(strJYM);
		$("#regist .quc-input-sms-token").css("color","darkmagenta");
	})
}

$("#regist .quc-form").submit(function() {
	return false;
})
$("#regist .quc-form div p input").focus(function() {
	$("#regist .quc-form div p input").parent().removeClass("quc-input-bg-focus");
	$(this).parent().removeClass("quc-input-bg-incorrect");
	$(this).parent().addClass("quc-input-bg-focus");
})
$("#regist .quc-form div p input").keyup(function() {
	$(this).parent().removeClass("quc-input-bg-focus");
	$(this).parent().addClass("quc-input-bg-incorrect");
})

var isChoice = 0;

$("#regist .quc-type-email").click(function(){
	isChoice = 1;
})
$("#regist .quc-type-mobile").click(function(){
	isChoice = 0;
})
var isName =false;
var isPwd =false;
var isRePwd =false;
var isYZM=false;
var isJYM =false;
var isPhone =false;
var isCheak =false;
var isEmail =false;
//注册页面验证
$(".quc-form.regist").submit(function(){
	if($("#regist .quc-checkbox").is(':checked')==true){
		isCheak =true;
	}else{
		isCheak =false;	
	}
	if(isChoice==0){
		if(isPhone==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("请填写正确的手机号码");
			return false;
		}else if(isYZM==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("验证码错误");
			return false;
		}else if(isJYM==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("校验码错误");
			return false;
		}else if(isName==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("请填写正确的用户名");
			return false;
		}else if(isPwd==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("输入正确格式的密码");
			return false;
		}else if(isRePwd==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("两次密码不一致");
			return false;
		}else if(isCheak==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("请仔细阅读注册条款后同意才能注册");
			return false;
		}else {
			$("#tanchuang").css("display","block");
			$("#tanchuang .dialog-content p").text("注册成功");
			$("#regist").css("display","none");			
			aQucIs.removeClass("quc-tip-icon-correct");
			isPhone=false;
			isYZM=!isYZM;
			isJYM=!isJYM;
			isName=!isName;
			isPwd=!isPwd;
			isRePwd=!isRePwd;
			var userName = $(".quc-input-mobile").val();
			var pwd =$(".quc-input-password").val();
			$(".login a").html("注销");
			$(".regist a").html("");
			$(".userTopName").html(userName);
			aQucInputs.val("");
			var dat = new Date();
		    var time =(dat.getTime())%10000000;
		    var goodsInfo ={userName:userName,pwd:pwd};
			var uesrInfomation = $.cookie("userInfo")? JSON.parse($.cookie("userInfo")) : {};
			if($.cookie("userInfo") =="{}"||uesrInfomation=="{}"){
				uesrInfomation[time] = goodsInfo;
			}else{
				for (var j in uesrInfomation) {
					if(goodsInfo.userName==uesrInfomation[j].userName){
						return false;
					}else{
						uesrInfomation[time] = goodsInfo;
					}				
				}
			}
			$.cookie("userInfo", JSON.stringify(uesrInfomation), {expires: 7, path: "/"});
			return false;
		}
		return false;
	}else{
		if(isEmail==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("请填写正确的邮箱");
			return false;
		}else if(isYZM==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("验证码错误");
			return false;
		}else if(isName==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("请填写正确的用户名");
			return false;
		}else if(isPwd==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("输入正确格式的密码");
			return false;
		}else if(isRePwd==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("两次密码不一致");
			return false;
		}else if(isCheak==false){
	        $("#tanchuang").css("display","block");				
			$("#tanchuang .dialog-content p").text("请仔细阅读注册条款后同意才能注册");
			return false;
		}else {
			$("#tanchuang").css("display","block");
			$("#tanchuang .dialog-content p").text("注册成功");
			$("#regist").css("display","none");
			aQucIs.removeClass("quc-tip-icon-correct");
			isPhone=false;
			isYZM=!isYZM;
			isJYM=!isJYM;
			isName=!isName;
			isPwd=!isPwd;
			isRePwd=!isRePwd;
			var userName = $(".quc-input-email").val();
			var pwd =$(".quc-input-password").val();
			$(".login a").html("注销");
			$(".regist a").html("");
			$(".userTopName").html(userName);
			aQucInputs.val("");
			var dat = new Date();
		    var time =(dat.getTime())%10000000;
		    var goodsInfo ={userName:userName,pwd:pwd};
			var uesrInfomation = $.cookie("userInfo")? JSON.parse($.cookie("userInfo")) : {};
			if($.cookie("userInfo") =="{}"||uesrInfomation=="{}"){
				uesrInfomation[time] = goodsInfo;
			}else{
				for (var j in uesrInfomation) {
					if(goodsInfo.userName==uesrInfomation[j].userName){
						return false;
					}else{
						uesrInfomation[time] = goodsInfo;
					}				
				}
			}
			$.cookie("userInfo", JSON.stringify(uesrInfomation), {expires: 7, path: "/"});
			return false;
		}
		return false;
	}
	return false;
})
function changYZM(){
	var strsource=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var str ="";
    for (var i =0;i<4;i++) {
    	var random = parseInt(Math.random()*strsource.length);
    	str+=strsource[random];
    }
    return str;
}
function cheakEmailAll(tagertId, num) {
	//num 0:验证手机,1:验证验证码,2:验证校验码,3:用户名,4:密码,5:确认密码,6:条款验证,7:邮箱验证;
	var regPhone = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
	var regName =/^[a-zA-z_0-9]\w{5,15}$/;
//	var regName =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
	var regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
	var str = $(tagertId).val();
	var url = "../data/login/info.json";
	if(num == 0) {
		if($.cookie("userInfo")&&$.cookie("userInfo")!="{}"){
			var uesrInfomation = $.cookie("userInfo")? JSON.parse($.cookie("userInfo")) : {};
			if(uesrInfomation!="{}"){
				for (var ki in uesrInfomation) {
					if(uesrInfomation[ki].userName==str){
						isEmail = false;
						aQucIs.eq(0).addClass("quc-tip-icon-incorrect");
						aQucTips.eq(0).addClass("quc-tip-error").html("账号已存在");
						return false;
					}else{
						isEmail = true;
						$(tagertId).parent().removeClass("quc-input-bg-incorrect");
						aQucIs.eq(0).removeClass("quc-tip-icon-incorrect");
						aQucIs.eq(0).addClass("quc-tip-icon-correct");
						aQucTips.eq(0).removeClass("quc-tip-error").html("");
					}
				}
			}
		}else{
			if(regEmail.test(str)) {
				$.ajax({
					url: url,
					type: "get",
					async: false,
					success: function(data) {
						for(var k in data) {
							if(str == data[k].phone) {
								isEmail = false;
								aQucIs.eq(0).addClass("quc-tip-icon-incorrect");
								aQucTips.eq(0).addClass("quc-tip-error").html("该邮箱已经注册过了");
								return false;
							} else {
								isEmail =true;
								$(tagertId).parent().removeClass("quc-input-bg-incorrect");
								aQucIs.eq(0).removeClass("quc-tip-icon-incorrect");
								aQucIs.eq(0).addClass("quc-tip-icon-correct");
								aQucTips.eq(0).removeClass("quc-tip-error").html("");
							}
						}
	
					},
					error: function(data) {
						console.log(data);
					}
				})
			} else {
				aQucIs.eq(0).addClass("quc-tip-icon-incorrect");
				aQucTips.eq(0).addClass("quc-tip-error").html("邮箱格式错误");
			}
		}
	}
	if(num == 4) {
		if(str!=""){
			if(str.toUpperCase()==$(".quc-captcha-change").eq(0).html().toUpperCase()){
				$(tagertId).parent().removeClass("quc-input-bg-incorrect");
				aQucIs.eq(num).removeClass("quc-tip-icon-incorrect");
				aQucIs.eq(num).addClass("quc-tip-icon-correct");
				aQucTips.eq(num).removeClass("quc-tip-error").html("");
				isYZM = true;
			}else{	
				aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
				aQucTips.eq(num).addClass("quc-tip-error").html("验证码错误");
			}
		} else {
			aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
			aQucTips.eq(num).addClass("quc-tip-error").html("验证码错误");
		}
	}
     if(num ==1){     	
    	if(str.length !=0){
    		if(regName.test(str)){
    		    $.ajax({
				url: url,
				type: "get",
				async: false,
				success: function(data) {
					for(var k in data) {
						if(str == data[k].userName) {
							isName = false;
							aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
							aQucTips.eq(num).addClass("quc-tip-error").html("该用户名已经注册过了");
							return false;
						} else {
							isName = true;
							$(tagertId).parent().removeClass("quc-input-bg-incorrect");
				    		aQucIs.eq(num).removeClass("quc-tip-icon-incorrect");
							aQucIs.eq(num).addClass("quc-tip-icon-correct");
							aQucTips.eq(num).removeClass("quc-tip-error").html("");
						}
					}

				},
				error: function(data) {
					console.log(data);
				}
			})	
    		}else{
    			aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
				aQucTips.eq(num).addClass("quc-tip-error").html("用户名不合法");
    		}
    		
    	}else{
    		aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
			aQucTips.eq(num).addClass("quc-tip-error").html("用户名不能为空");
    	}
    }
    if(num ==2){
    	if(str.length >= 6&&str.length <= 20){
    		$(tagertId).parent().removeClass("quc-input-bg-incorrect");
    		aQucIs.eq(num).removeClass("quc-tip-icon-incorrect");
			aQucIs.eq(num).addClass("quc-tip-icon-correct");
			aQucTips.eq(num).removeClass("quc-tip-error").html("");
			isPwd = true;
    	}else{
    		aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
			aQucTips.eq(num).addClass("quc-tip-error").html("密码为6-20位");
    	}
    }
    if(num ==3){
    	if((str.length >= 6&&str.length <= 20)&&str==aQucInputs.eq(2).val()){
    		$(tagertId).parent().removeClass("quc-input-bg-incorrect");
    		aQucIs.eq(num).removeClass("quc-tip-icon-incorrect");
			aQucIs.eq(num).addClass("quc-tip-icon-correct");
			aQucTips.eq(num).removeClass("quc-tip-error").html("");
			isRePwd =true;
    	}else{
    		aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
			aQucTips.eq(num).addClass("quc-tip-error").html("两次输入的密码不一样");
    	}
    }
}
function cheakAll(tagertId, num) {
	//num 0:验证手机,1:验证验证码,2:验证校验码,3:用户名,4:密码,5:确认密码,6:条款验证,7:邮箱验证;
	var regPhone = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
	var regName =/^[a-zA-z_0-9]\w{5,15}$/;
	var str = $(tagertId).val();
	var url = "../data/login/info.json";
	if(num == 0&&isChoice==0) {
		if(regPhone.test(str)) {
			if($.cookie("userInfo")&&$.cookie("userInfo")!="{}"){
				var uesrInfomation = $.cookie("userInfo")? JSON.parse($.cookie("userInfo")) : {};
				if(uesrInfomation!="{}"){
					for (var ki in uesrInfomation) {
						if(uesrInfomation[ki].userName==str){
							isPhone = false;
							aQucIs.eq(0).addClass("quc-tip-icon-incorrect");
							aQucTips.eq(0).addClass("quc-tip-error").html("该手机已经注册过了");
							return false;						
						}else{
							isPhone =true;
							$(tagertId).parent().removeClass("quc-input-bg-incorrect");
							aQucIs.eq(0).removeClass("quc-tip-icon-incorrect");
							aQucIs.eq(0).addClass("quc-tip-icon-correct");
							aQucTips.eq(0).removeClass("quc-tip-error").html("");
						}
					}
				}
			}else{
				$.ajax({
					url: url,
					type: "get",
					async: false,
					success: function(data) {
						for(var k in data) {
							if(str == data[k].phone) {
								isPhone = false;
								aQucIs.eq(0).addClass("quc-tip-icon-incorrect");
								aQucTips.eq(0).addClass("quc-tip-error").html("该手机已经注册过了");
								return false;
							} else {
								isPhone =true;
								$(tagertId).parent().removeClass("quc-input-bg-incorrect");
								aQucIs.eq(0).removeClass("quc-tip-icon-incorrect");
								aQucIs.eq(0).addClass("quc-tip-icon-correct");
								aQucTips.eq(0).removeClass("quc-tip-error").html("");
							}
						}
	
					},
					error: function(data) {
						console.log(data);
					}
				})
			}
		} else {
			aQucIs.eq(0).addClass("quc-tip-icon-incorrect");
			aQucTips.eq(0).addClass("quc-tip-error").html("手机号码格式有误");
		}
	}
	if(num == 1) {
		if(str!=""){
			if(str.toUpperCase()==$(".quc-captcha-change").eq(0).html().toUpperCase()){
				$(tagertId).parent().removeClass("quc-input-bg-incorrect");
				aQucIs.eq(1).removeClass("quc-tip-icon-incorrect");
				aQucIs.eq(1).addClass("quc-tip-icon-correct");
				aQucTips.eq(1).removeClass("quc-tip-error").html("");
				isYZM = true;
			}else{	
				aQucIs.eq(1).addClass("quc-tip-icon-incorrect");
				aQucTips.eq(1).addClass("quc-tip-error").html("验证码错误");
			}
		} else {
			aQucIs.eq(1).addClass("quc-tip-icon-incorrect");
			aQucTips.eq(1).addClass("quc-tip-error").html("验证码错误");
		}
	}
    if(num ==2){
    	if(str.length == 6){
    		isJYM =true;
    		$(tagertId).parent().removeClass("quc-input-bg-incorrect");
    		aQucIs.eq(num).removeClass("quc-tip-icon-incorrect");
			aQucIs.eq(num).addClass("quc-tip-icon-correct");
			aQucTips.eq(num).removeClass("quc-tip-error").html("");
    	}else{

    		aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
			aQucTips.eq(num).addClass("quc-tip-error").html("校验码错误");
    	}
    }
     if(num ==3){
    	if(str.length !=0){
    		if(regName.test(str)){
    		    $.ajax({
				url: url,
				type: "get",
				async: false,
				success: function(data) {
					for(var k in data) {
						if(str == data[k].userName) {
							isName = false;
							aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
							aQucTips.eq(num).addClass("quc-tip-error").html("该用户名已经注册过了");
							return false;
						} else {
							isName = true;
							$(tagertId).parent().removeClass("quc-input-bg-incorrect");
				    		aQucIs.eq(num).removeClass("quc-tip-icon-incorrect");
							aQucIs.eq(num).addClass("quc-tip-icon-correct");
							aQucTips.eq(num).removeClass("quc-tip-error").html("");
						}
					}

				},
				error: function(data) {
					console.log(data);
					}
				})	
    		}else{
    			aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
				aQucTips.eq(num).addClass("quc-tip-error").html("用户名不合法");
    		}
    		
    	}else{
    		aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
			aQucTips.eq(num).addClass("quc-tip-error").html("用户名不能为空");
    	}
    }
    if(num ==4){
    	if(str.length >= 6&&str.length <= 20){
    		$(tagertId).parent().removeClass("quc-input-bg-incorrect");
    		aQucIs.eq(num).removeClass("quc-tip-icon-incorrect");
			aQucIs.eq(num).addClass("quc-tip-icon-correct");
			aQucTips.eq(num).removeClass("quc-tip-error").html("");
			isPwd = true;
    	}else{
    		aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
			aQucTips.eq(num).addClass("quc-tip-error").html("密码为6-20位");
    	}
    }
    if(num ==5){
    	if((str.length >= 6&&str.length <= 20)&&str==aQucInputs.eq(4).val()){
    		$(tagertId).parent().removeClass("quc-input-bg-incorrect");
    		aQucIs.eq(num).removeClass("quc-tip-icon-incorrect");
			aQucIs.eq(num).addClass("quc-tip-icon-correct");
			aQucTips.eq(num).removeClass("quc-tip-error").html("");
			isRePwd =true;
    	}else{
    		aQucIs.eq(num).addClass("quc-tip-icon-incorrect");
			aQucTips.eq(num).addClass("quc-tip-error").html("两次输入的密码不一样");
    	}
    }
}



