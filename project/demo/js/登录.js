if(localStorage.userid!="刘晗" || sessionStorage.userpwd!="1234567890"){
		alert("账号或密码错误，请回首页登录");
		sessionStorage.removeItem('userpwd');
		document.location="submit.html";
	}
	
	
	function logout(){
		localStorage.removeItem('userid');
		sessionStorage.clear();
		document.location="submit.html";
	}