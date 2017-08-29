/*
* @Author: yuyang
* @Date:   2017-08-29 20:06:52
* @Last Modified by:   yuyang
* @Last Modified time: 2017-08-29 20:23:46
*/
function $(id){return document.getElementById(id);};
function scroll(){
	if(window.pageYOffset != null){
		return {
			left: window.pageXOffset,
			top: window.pageYOffset
		}
	}else if(document.compatMode == "CSS1Compat"){
		return {
			left: document.documentElement.scrollLeft,
			top: document.documentElement.scrollTop
		}
	}
	return {
		left: document.body.scrollLeft,
		top: document.body.scrollTop
	}
}