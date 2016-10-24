function getStyle(obj,attr){
	try{
		return getComputedStyle(obj,null)[attr];
	}catch(e){
		//TODO handle the exception
		return obj.currentStyle[attr];
	}
}





























