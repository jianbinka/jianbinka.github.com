window.onload=function () {
			oUl=document.getElementById('ul1');
			aBtn=document.getElementById('btn1');
			oTxt=document.getElementById('txt1');

			aBtn.onclick=function() {
				var oLi=document.createElement('li');
				
				oLi.innerHTML=oTxt.value;
				oTxt.value=' ';
				// oUl.appendChild(oLi);
				if(oUl.children.length>0){
					oUl.insertBefore(oLi,oUl.children[0]);
				}
				else{
					oUl.appendChild(oLi);

				}
				var iHeight=oLi.offsetHeight;
				oLi.style.height=0;
				startMove(oLi,{height:iHeight},function(){
					startMove(oLi,{opacity:100})
				});

					


			}

		}