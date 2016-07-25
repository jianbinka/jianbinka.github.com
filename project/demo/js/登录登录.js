function sendok(){
				if(userid.value!="" && userpwd.value!=""){		
					localStorage.userid=userid.value;
					sessionStorage.userpwd=userpwd.value;
					return true;
				}else{
					alert("请输入帐号");
					return false;
				}
			
				}
			
			function isload(){
				if(localStorage.userid) 
					userid.value=localStorage.userid;
				
				
			}