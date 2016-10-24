/*创建获取class的函数*/
function getByClassName(cn){
	/*创建一个新数组*/
	var arr=[];
	/*创建一个正则*/
	var reg=new RegExp("\\b"+cn+"\\b")
	/*获取网页中所有的元素*/
	var all=document.all;
	/*遍历*/
	for (var i=0;i<all.length;i++) {
		/*获取所有元素的className*/
		var namearr=all[i].className;
		/*判断classname数组中是否有符合正则的部分，如果有符合的，则把all[i]添加到arr数组中*/
		if(reg.test(namearr)){
			arr.push(all[i]);
		}
	}
	/*将新数组变成调用该函数是的返回值*/
	return arr;
}
/*正常浏览器中支持document.getElementsByName而IE9以下的浏览器不支持，将函数getByClassName赋值给document.getElementsByClassName*/
document.getElementsByClassName=document.getElementsByName||getByClassName;
window.onload=function(){
	var box=document.getElementsByClassName("box");
	alert(box.length);
	var box1=document.getElementsByClassName("box1");
	alert(box1.length);
}
