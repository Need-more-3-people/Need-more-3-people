var punchChart = null;
// Specify configuration items and data for charts.
option = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		axisTick: {
			alignWithLabel: true
		}
	}],
	yAxis: [{
		type: 'value'
	}],
	series: [{
		name: 'Direct',
		type: 'bar',
		barWidth: '60%',
		data: [10, 52, 200, 334, 390, 330, 220]
	}]
};

punchChart = echarts.init(document.getElementById("main")); // Initialize the echarts instance based on the prepared dom.
punchChart.setOption(option); // Displays the chart using the configuration item and data you just specified.


var args = new Object();

// Gets the parameters carried by the link.
args = GetUrlParms();

var flag = false;

var clockFlag;

// Initialize the value of hours, minutes and seconds.
var hour = parseInt(args["hour"]);

var minutes = parseInt(args["minutes"]);

var second = parseInt(args["second"]);

window.onload = function() {

	// Start the timer and execute it once every second.
	clockFlag = setInterval("beginTime()", 1000);

};

// Computing Time
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

// Back to Home page
function back() {
	location.href = "index.html";
}


function GetUrlParms()

{

	var args = new Object();

	var query = location.search.substring(1); //Get query string.   

	var pairs = query.split("&"); //Break at comma.   

	for (var i = 0; i < pairs.length; i++)

	{

		var pos = pairs[i].indexOf('='); //Find name=value   

		if (pos == -1) continue; //If can not find, just skip   

		var argname = pairs[i].substring(0, pos); // Get name   

		var value = pairs[i].substring(pos + 1); // Get value   

		args[argname] = unescape(value); //Save as attribute   

	}

	return args;

}
