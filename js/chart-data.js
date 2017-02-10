var randomScalingFactor = function() {
	return Math.round(Math.random() * 100);
};
var all=new Array();
all['arr'] = [150,26,58,96,47,25,13,155,457];
all['labels'] = [ "January", "February", "March", "April", "May", "June", "July","s","a" ];
function data(arr){
	var lineChartData = {
		labels : all['labels'],
		datasets : [
				{
					label : "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : all['arr']
				} 
				]
	}
return lineChartData;
}
function draw_chart(all) {
	var chart1 = document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart1).Line(data(all), {
		responsive : true
	});
};
//点击选择类型
$('.select_box p').click(function(){
	$('.option_box').toggle();
})
$('.select_option').click(function(){
	var value = $(this).html();
	$('.select_box p').html(value);
	$('.option_box').hide();
})
//提交日期
$('#T_btn').click(function(){
	var start = $('input[name="start"]').val();
	var end =$('input[name="end"]').val();
	$.ajax({
		type:'post',
		url:'',
		data:{start:start,end:end},
		success:function(res){
			alert('ok')
		}
	})
})
//提交当前日期
$('.time_box span').click(function(){
	var now = new Date();
	var y = now.getFullYear();
	var m = now.getMonth() + 1;
	var d = now.getDate();
	var T_now = y+'-'+m+'-'+d;
	var week = now.getTime();
	week += 60*60*24*7*1000;
	week = new Date(week);
	y = week.getFullYear();
	m = week.getMonth() + 1;
	d = week.getDate();
	var T_week = y+'-'+m+'-'+d;
	var btn = $(this).val();
	if(btn=='今日'){

	}else{

	}
	$(this).parent().find('span').removeClass('T_active');
	$(this).addClass('T_active')
})

window.onload=function(){
	draw_chart(all);
}