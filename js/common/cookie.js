function setCookie(name, value, expiresNum){
	var cookieTxt = encodeURIComponent(name)+"="+encodeURIComponent(value);;
	
    var dat = new Date();
     dat.setDate = (dat.getDate()+expiresNum);
	cookieTxt += "; expires = "+dat;
	document.cookie = cookieTxt;
}
	///setCookie("pwd","张三",10);
	//setCookie("name","张三",10);
	
function getCookie(name){
var str =decodeURIComponent(document.cookie);
var arr = str.split("; ");

for(var i =0; i<arr.length;i++){
	  var arr1 = arr[i].split("=");
	  if(name==arr1[0]){
	  	return arr1[1];
	  } 
	  
	}	
	return "";
	}	
function removeCookie(name){
 	setCookie(name,"",-1);
 }

			
