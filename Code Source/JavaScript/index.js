// 是否可移动标志
var flag = false;

// 计时器标志
var clockFlag;

// 小时
var hour = 0;

// 分钟
var minutes = 0;

// 秒
var second = 0;

window.onload = function() {

	// 获取手势图标元素
	var point = document.getElementsByClassName("point");

	// 定时器变量
	var inter;

	// 为每一个图标注册时间
	for (var i = 0; i < point.length; i++) {

		// 鼠标放上去的事件
		point[i].onmouseover = function(obj) {

			if (obj.target.getAttribute("src").indexOf("pokedisable") >= 0) {
				return;
			}

			inter = setInterval("move('" + obj.target.id + "')", 100);

		};

		// 鼠标移走的事件
		point[i].onmouseout = function(obj) {

			obj.target.style.left = "0px";

			clearInterval(inter);
		}
	}

	// 开始计时器，每秒执行一次
	clockFlag = setInterval("beginTime()", 1000);

};

// 计算时间
function beginTime() {

	if (second == 59) {
		second = 0;
		if (minutes == 59) {

			minutes = 0;

			hour = hour + 1;

		} else {
			minutes = minutes + 1;
		}
	} else {
		second = second + 1;
	}

	// 将时间赋值到页面元素上
	if (hour < 10) {
		document.getElementById("hour").innerHTML = "0" + hour;
	} else {
		document.getElementById("hour").innerHTML = hour;
	}

	if (minutes < 10) {
		document.getElementById("minutes").innerHTML = "0" + minutes;
	} else {
		document.getElementById("minutes").innerHTML = minutes;
	}

	if (second < 10) {
		document.getElementById("second").innerHTML = "0" + second;
	} else {
		document.getElementById("second").innerHTML = second;
	}

}

// 点击暂停继续触发的事件
function timeOut() {

	var conmand = document.getElementById("calClock").value;

	if (conmand == "Pause") {
		// 更改按钮的文本，并停止计时器
		document.getElementById("calClock").value = "Continue";

		clearInterval(clockFlag);
	} else {
		
		// 更改按钮的文本，并开始计时器
		document.getElementById("calClock").value = "Pause";

		clockFlag = setInterval("beginTime()", 1000);
	}

}

// 移动图标位置
function move(id) {

	var obj = document.getElementById(id);

	if (flag) {
		obj.style.left = "-10px";

		flag = false;
	} else {

		obj.style.left = "0px";

		flag = true;
	}
}

// 返回登录界面
function exit() {
	location.href = "login.html";
}

// 点击touch按钮，更改第一行的图标
function touch() {

	var conmand = document.getElementById("touchMe").value;

	if (conmand == "Don't touch me") {

		document.getElementById("touchMe").value = "Touch me";

		document.getElementById("poke1").setAttribute("src", "./img/pokedisable.png");

	} else {
		document.getElementById("touchMe").value = "Don't touch me";

		document.getElementById("poke1").setAttribute("src", "./img/poke.png");
	}

}

// 进入个人中心界面，并携带时分秒的参数
function gotoCenter() {
	location.href = "usercenter.html?hour=" + hour + "&minutes=" + minutes + "&second=" + second;
}
