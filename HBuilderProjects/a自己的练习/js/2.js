/*获取样式和调用move函数*/
function getstyle(obj,attr){
			if(getComputedStyle){
				return getComputedStyle(obj,null)[attr];
			}else{
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
					if(newvalue<target){
						newvalue=target;
					}
				} else{
					var newvalue=oldvalue+speed;
					if(newvalue>target){
						newvalue=target;
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
/*获取classname的函数*/
function getclassname(cn){
	var arr=[];
	var reg=new RegExp("\\b"+cn+"\\b");
	var all=document.all;
	for (var i=0;i<all.length;i++) {
		var namearr=all[i].className;
		if(reg.test(namearr)){
			arr.push(all[i]);
		}
	}
	return arr;
}

		
/*轮播图的实现*/
window.onload=function(){
				var img=getclassname("img1");
				
				var a=getclassname("a1");
				var ul1=document.getElementById("ul5");
				var ul2=document.getElementById("alist");
				var num=0;
				var timer=null;
				//ul的宽度
				/*ul1.style.width=202*img.length+"px";
				//用js创建a
				for (var i=0;i<img.length-1;i++) {
					ul2.innerHTML += "<a href='javascript:;'></a>";
				}*/
				autochange();
				a[0].style.backgroundColor="black"
				for (var i=0;i<a.length;i++) {
					a[i].index=i;
					a[i].onmouseenter=function(){
						clearInterval(timer);
						num=this.index;
						init();
						move(ul1,"left",-190*this.index,100,function(){
							autochange();
						})
					};
				}
			
			function autochange(){
				timer=setInterval(function(){
					num++;
					if(num>img.length){
						num=0;
					}
					
					move(ul1,"left",-190*num,10,function(){
						init();
					})
				},2000)
			}
			function init(){
				if(num>=img.length-1){
					ul1.style.left=0;
					num=0;
				}
				
				for (var i=0;i<a.length;i++) {
					a[i].style.backgroundColor="";
				}
				a[num].style.backgroundColor="black";
				
				}
			
			}
































