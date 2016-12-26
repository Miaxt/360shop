//ajax封装
function urlParamsHandler(o){
	encodeURIComponent(o);
	var arr = [];
	for(var key in o){
		arr.push(encodeURIComponent(key)+"="+encodeURIComponent(o[key]));	
	}
	return arr.join("&");
 }

function ajax(o){
	
	var xhr = null;
	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Mircrosoft.XMLHTTP");
	}
	
	o.method = o.method||"get";
	
	(typeof o.isAsync)=="boolean" ? o.isAsync:o.isAsync = true;
	if(o.method.toLowerCase()=="get"){
		xhr.open("get",o.url+"? t = "+ new Date().getTime()+"&"+urlParamsHandler(o.data),o.isAsync);
		xhr.send();		
	}else{
		xhr.open("post",o.url,o.isAsync);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(urlParamsHandler(o.data));
	}
	if(o.isAsync==false){
	    o.success&&o.success(xhr.responseText);
	}else{
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4){
			if(xhr.status==200) {
				o.success&&o.success(xhr.responseText);	//返回成功后执行返回内容
			} else {
				o.error&&o.error(xhr.responseText);			
			}
        }
  }
	}
	}