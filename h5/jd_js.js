var oSend= document.getElementById('send')
var oProvince = document.getElementById('province')
oSend.onmouseover = function(){
	oProvince.style.display = 'block';
	this.style.backgroundColor = '#fff';
	this.style.boxShadow=" 3px 3px 1px #999"
};
oSend.onmouseout = function(){
	oProvince.style.display = 'none';
	this.style.backgroundColor = '#f1f1f1';
	this.style.boxShadow="";
};

var oNav_2 = document.getElementById("nav_2");
var aNav2Li = oNav_2.getElementsByTagName("li");
var oSiteMap = document.getElementById("siteMap")
aNav2Li[9].onmouseover = function(){
	oSiteMap.style.display = 'block';
	this.style.backgroundColor = '#fff';
	this.style.boxShadow=" 3px 3px 1px #999"
};
aNav2Li[9].onmouseout = function(){
	oSiteMap.style.display = 'none';
	this.style.backgroundColor = '#f1f1f1';
	this.style.boxShadow="";
};

var aJS1 = document.getElementsByClassName('nav2_js_1');
var oOption = document.getElementById('nav2_1');
var aOp = oOption.getElementsByTagName('li');
var oNav2 = document.getElementById('nav2');
var timer = null;

for(var i=0;i<aOp.length;i++){
	aOp[i].index = i;
	aOp[i].onmouseover = function(){
		clearTimeout(timer);
		for(var j=0;j<aJS1.length;j++){
			aJS1[j].style.display = 'none';
		};
		aJS1[this.index].style.display = 'block';
	};
	
	aOp[i].onmouseout = function(){
		timer = setTimeout(function(){
			for(var j=0;j<aJS1.length;j++){
				aJS1[j].style.display = 'none';
			};
		},100)
	};
	
	aJS1[i].onmouseover = function(){
		clearTimeout(timer);
		this.style.display = 'block';
	};
	
	aJS1[i].onmouseout = function(){
		timer = setTimeout(function(){
			for(var j=0;j<aJS1.length;j++){
				aJS1[j].style.display = 'none';
			};
		},100)
	};
};


var aLr = document.getElementsByClassName('lr');
var aLeft = document.getElementsByClassName('left');
var aRight = document.getElementsByClassName('right');


for(var i=0;i<aLr.length;i++){
	aLr[i].index = i;
	aLr[i].onmouseover = function(){
		aLeft[this.index].style.display = "block";
		aRight[this.index].style.display = "block";
	};
	
	aLr[i].onmouseout= function(){
		aLeft[this.index].style.display = "none";
		aRight[this.index].style.display = "none";
	};
};

var oBanner = document.getElementById('banner');
var oBanner_ul = document.getElementById('banner_ul');
var aBanner_li = oBanner_ul.getElementsByTagName("li")
var oBanner_number = document.getElementById('banner_number');
var aB_n_li = oBanner_number.getElementsByTagName('li');
var aLi = oBanner_ul.getElementsByTagName('li');




function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	};
}
function startMove(obj,attr,iTarget){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var cur = 0;
		if(attr == 'opacity'){
			cur = Math.round(parseFloat(getStyle(obj,attr))*100);
		}else{
			cur = parseInt(getStyle(obj,attr));
		}
		var speed = (iTarget-cur)/6;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(cur == iTarget){
			clearInterval(obj.timer);
		} else {
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity:'+ (cur + speed)+')';
				obj.style.opacity = (cur + speed)/100;
			} else {
				obj.style[attr] = cur+speed+'px';
			};
		};
	},30)
};//运动函数

var iBanner = 0;
var bannerTimer = null;

oBanner_ul.style.width = aBanner_li.length * 730 + "px";

function bannerTurn(){
	startMove(oBanner_ul,"left",-730*iBanner)
	for(var j=0;j<aB_n_li.length;j++){
		aB_n_li[j].className = "";	
	}	
	aB_n_li[iBanner].className = "active";	
};

function prevBanner(){
	iBanner--;
	if(iBanner == -1){
		iBanner = aBanner_li.length-1	;
	};
	bannerTurn();
};

function nextBanner(){
	iBanner++;
	if(iBanner == aBanner_li.length){
		iBanner = 0	;
	};
	bannerTurn();
}

aLeft[0].onclick =function(){
	prevBanner();
}

aRight[0].onclick = function(){
	nextBanner();
}

for(var i=0;i<aB_n_li.length;i++){
	aB_n_li[i].index = i
	aB_n_li[i].onclick = function(){
		iBanner = this.index;
		bannerTurn();
	};	
};

var bannerTime = function(){bannerTimer =setInterval(nextBanner,3000)};
bannerTime();	
oBanner_ul.onmouseover = oBanner_number.onmouseover = function(){
	clearInterval(bannerTimer);
}

oBanner_ul.onmouseout = oBanner_number.onmouseout = bannerTime;

var firstNav = document.getElementById('first_F_nav');
var aFirstNavLi = firstNav.getElementsByTagName('li');
var oFirstFloor = document.getElementById("first_F");
var aFirstSelect = oFirstFloor.getElementsByClassName("firstSelect");

for(var i=0;i<aFirstNavLi.length;i++){
	aFirstNavLi[i].index = i
	aFirstNavLi[i].onmouseover = function(){
		for(var j=0;j<aFirstSelect.length;j++){
			aFirstNavLi[j].className = "";
			this.className = "nav_active"
			aFirstSelect[j].style.display = "none";	
		}
		aFirstSelect[this.index].style.display = "block";
	};
};


var secondNav = document.getElementById('second_F_nav');
var aSecondNavLi = secondNav.getElementsByTagName('li');
var oSecondFloor = document.getElementById("second_F");
var aSecondSelect = oSecondFloor.