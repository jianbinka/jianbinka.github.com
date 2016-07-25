var curIndex=0;
 //时间间隔 单位毫秒
			 var timeInterval=2000;
			 var arr=new Array();
			 arr[0]="img/9.jpg";
			 arr[1]="img/10.jpg";
			 arr[2]="img/11.jpg";
			 arr[3]="img/12.jpg";
			 arr[4]="img/13.jpg";
			 arr[5]="img/14.jpg";
			 
			setInterval("changeImg()",timeInterval);
			function changeImg()
			{
			    var obj=document.getElementById("head");
			//我也不知道上面这行为什么，会多个_x。是我复制进来的时候自动产生的。去掉了又自己产生。
			    if (curIndex==arr.length-1)
			    {
			        curIndex=0;
			    }
			    else
			    {
			       curIndex+=1;
			    }
			    obj.src=arr[curIndex];
			}