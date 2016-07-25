function getstyle(obj,name){
		if(obj.currentstyle){
			return obj.currentstyle[name];
		}
		else{
			return getComputedStyle(obj,false)[name];
		}
	}
	function startMove(obj,json,fnEnd){
		clearInterval(obj.timer);
		 obj.timer=setInterval(function(){
		 	var bStop=true;//假设所有的值都已经到了
		 	
		 	for(var attr in json)
		 	{
		 		var cur=0;
		 	if(attr=='opacity'){
		 		 cur=Math.round(parseFloat(getstyle(obj,attr))*100);
		 	}
			else{
					cur=parseInt(getstyle(obj,attr));
			} 
			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			// if(cur==json[attr]){

			// 	clearInterval(obj.timer);
			// 	if(fnEnd) fnEnd();
			// }
			// else{
			if(cur!=json[attr])
				bStop=false;
				if(attr=='opacity'){
					obj.style.opacity=(cur+speed)/100;
					// document.getElementById('txt').value=obj.style.opacity;
				}
				else{
					obj.style[attr]=cur+speed+'px';
				}
				
			}
			
			if(bStop){
				clearInterval(obj.timer);
				if(fnEnd) fnEnd();
			}
		},80)
	}



	
