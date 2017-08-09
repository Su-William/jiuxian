$(function(){
	$(".hd-n1").hover(
		function() {
			$(".hd-n1").addClass("on").find(".myJiuxian").children(".publicIcon").css({ "transform": "rotate(180deg)" });
		},
		function() {
			$(".hd-n1").removeClass("on").find(".myJiuxian").children(".publicIcon").css({ "transform": "rotate(0)" });
		}
	)
	$(".hd-n5").hover(
		function() {
			$(".erm2015922").show();
		},
		function() {
			$(".erm2015922").hide();
		}
	)
	$(".hd-n7").hover(
		function() {
			$(".hd-n7").addClass("on").find(".publicIcon").css({ "transform": "rotate(180deg)" });
		},
		function() {
			$(".hd-n7").removeClass("on").find(".publicIcon").css({ "transform": "rotate(0)" });
		}
	)
	$(".hd-n8").hover(
		function() {
			$(".hd-n8").addClass("on").find(".publicIcon:last-child").css({ "transform": "rotate(180deg)" });
		},
		function() {
			$(".hd-n8").removeClass("on").find(".publicIcon:last-child").css({ "transform": "rotate(0)" });
		}
	)
	
	
	
	
	//导航数据
	$.get("./js/nav.json",function(data){
		var html = template('busdf',data);
		$(".categoryBox").html(html);
	})
	$(".categoryBox").on("mouseenter","li",function(){
		$(".navCon").show();
		var index = $(this).index();
		$.get("./js/nav-data.json",function(data){
			var html = template("menu",data[index]);
			$(".navCon").html(html);
		})
	})
	$(".navCategoryMenu").on("mouseleave",function(){
		$(".navCon").hide();
	})
	
	$(".navCategoryMenu").on("mouseenter",function(){
		$(".categoryBox").show();
	})
	$(".navCategoryMenu").on("mouseleave",function(){
		$(".categoryBox").hide();
	})
	
	$(".buyBtn").click(function(){
		$(".buyBox").show();
	})
	$(".cloB").click(function(){
		$(".buyBox").hide();
	})
	
	var proId = location.href.split("?")[1].split("=")[1];
	$.get("js/productList.json",function(data){
		for(var i in data){
			if(proId == data[i].Id){
				$(".show-pic img").attr("src",data[i].Img);
				$(".comName").find("h1").html(data[i].Tit);
				$(".comName").find("p").html(data[i].sTit);
				$(".d-cur").html(data[i].Tit);
				$("#nowPrice .pri").find("strong").html(data[i].Pic+".00");
			}
		}
	})
	
	$(".buyBtn").click(function(){
		var proId = location.href.split("?")[1].split("=")[1];
		var str = getCookie("cart");
		var obj = str ? JSON.parse(str) : {};
		if(obj[proId] == undefined){
			obj[proId] = 1;
		}else{
			obj[proId] = ++obj[proId];
		}
		var objToStr = JSON.stringify(obj);
		setCookie("cart",objToStr,7);
		var sum = 0;
		for(var i in obj){
			sum+=obj[i];
		}
		$(".jx_car_num").html(sum);
	})
	
	
})