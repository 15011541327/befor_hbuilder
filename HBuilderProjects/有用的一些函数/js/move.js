
/*创建Move函数*/
function move(obj,attr,target,speed,callback){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var oldvalue=parseFloat(getStyle(obj,attr));
		if (oldvalue>target) {
			/*左*/
			var newvalue=oldvalue-speed;
			if(newvalue<target){
				newvalue=target;
			}
		} else{
			/*右*/
			var newvalue=oldvalue+speed;
			if(newvalue>target){
				newvalue=target;
			}
			obj.style[attr]=newvalue+"px";
			if(nevalue==target){
				clearInterval(obj.timer);
				if(callback){
					callback();
				}
			}
		}
	},30)
}
/*创建获取外部style的函数*/
function getStyle(obj,attr){
	try{
       	return getComputedStyle(obj,null)[attr];
	}catch(e){
		return obj.currentStyle[attr];
	}
}
window.onload=function(){
	var ul=document.getElementsByTagName("ul")[0];
	ul.onmouseenter=function(){
		move()
	}
}
