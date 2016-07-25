window.onscroll=function(){
		var oDiv=document.getElementById('div1');
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		// oDiv.style.Top=document.documentElement.clientHeight-oDiv.offsetHeight+scrollTop+'px';
		// startMove(document.documentElement.clientHeight-oDiv.offsetHeight+scrollTop);
		startMove(parseInt((document.documentElement.clientHeight-oDiv.offsetHeight)/2+scrollTop));
	}

	var timer=null;
	function startMove(iTarget){
		clearInterval(timer);
		var oDiv=document.getElementById('div1');
		timer=setInterval(function(){
			var speed=(iTarget-oDiv.offsetTop)/4;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(iTarget==oDiv.offsetTop){
				clearInterval(timer);

			}
			else{
				oDiv.style.top=oDiv.offsetTop+speed+'px';
			}
		},30)

	}