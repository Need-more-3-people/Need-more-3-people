var punchChart = null;
// 指定图表的配置项和数据
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

punchChart = echarts.init(document.getElementById("main")); // 基于准备好的dom，初始化echarts实例
punchChart.setOption(option); // 使用刚指定的配置项和数据显示图表。


var args = new Object();

// 获取链接携带的参数
args = GetUrlParms();

var flag = false;

var clockFlag;

// 初始化时分秒的值
var hour = parseInt(args["hour"]);

var minutes = parseInt(args["minutes"]);

var second = parseInt(args["second"]);

window.onload = function() {

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

// 返回首页
function back() {
	location.href = "index.html";
}


function GetUrlParms()

{

	var args = new Object();

	var query = location.search.substring(1); //获取查询串   

	var pairs = query.split("&"); //在逗号处断开   

	for (var i = 0; i < pairs.length; i++)

	{

		var pos = pairs[i].indexOf('='); //查找name=value   

		if (pos == -1) continue; //如果没有找到就跳过   

		var argname = pairs[i].substring(0, pos); //提取name   

		var value = pairs[i].substring(pos + 1); //提取value   

		args[argname] = unescape(value); //存为属性   

	}

	return args;

}
