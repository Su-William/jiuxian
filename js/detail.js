$(function(){
	
	//导航数据
	$.get("./js/nav.json",function(data){
		var html = template('busdf',data);
		$(".categoryBox").html(html);
	})
	$(".categoryBox").on("mouseenter","li",function(){
		$(".navCon").show();
		console.log(this);
		var index = $(this).index();
		$.get("./js/nav-data.json",function(data){
			console.log(index);
			var html = template("menu",data[index]);
			console.log(data[index]);
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
	
})