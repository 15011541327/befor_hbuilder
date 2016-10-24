function getstyle(obj,attr){
			try{
				return getComputedStyle(obj,null)[attr];
			}catch(e){
				return obj.currentStyle[attr];
			}
		}
		function move(obj,attr,target,speed,callback){
			clearInterval(obj.timer);
			
			obj.timer=setInterval(function(){
				
				var oldvalue=parseInt(getstyle(obj,attr));
				if (oldvalue>target) {
					//左
					var newvalue=oldvalue-speed;
					if(newvalue<=target){
						newvalue=0;
					}
				} else{
					var newvalue=oldvalue+speed;
					if(newvalue>=target){
						newvalue=-2080;
					}
				}
				obj.style[attr]=newvalue+"px";
				
				if(newvalue==target){
					clearInterval(obj.timer);
					
					if(callback){
					callback();
					}
				}
				
				
			},50);
			
			
		}