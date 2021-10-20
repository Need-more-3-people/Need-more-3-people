// Is the flag movable
var flag = false;

// Timer flag
var clockFlag;

// Hour
var hour = 0;

// Minute
var minutes = 0;

// Second
var second = 0;

window.onload = function() {

	// Gets the gesture icon element.
	var point = document.getElementsByClassName("point");

	// Timer variable
	var inter;

	// Register time for each icon.
	for (var i = 0; i < point.length; i++) {

		// Mouse Hover
		point[i].onmouseover = function(obj) {

			if (obj.target.getAttribute("src").indexOf("pokedisable") >= 0) {
				return;
			}

			inter = setInterval("move('" + obj.target.id + "')", 100);

		};

		// Event of mouse removal.
		point[i].onmouseout = function(obj) {

			obj.target.style.left = "0px";

			clearInterval(inter);
		}
	}

	// Start the timer and execute it once every second.
	clockFlag = setInterval("beginTime()", 1000);

};

// Computing time
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

	// Assign time to page elements.
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

// Click pause to continue the triggered event.
function timeOut() {

	var conmand = document.getElementById("calClock").value;

	if (conmand == "Pause") {
		// Change the text of the button and stop the timer.
		document.getElementById("calClock").value = "Continue";

		clearInterval(clockFlag);
	} else {
		
		// Change the text of the button and start the timer.
		document.getElementById("calClock").value = "Pause";

		clockFlag = setInterval("beginTime()", 1000);
	}

}

// Move icon position.
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

// Back to Log in page
function exit() {
	location.href = "login.html";
}

// Click the touch button to change the icon in the first line.
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

// Enter the personal center interface and carry the parameters of hours, minutes and seconds.
function gotoCenter() {
	location.href = "usercenter.html?hour=" + hour + "&minutes=" + minutes + "&second=" + second;
}
