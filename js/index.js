$(function() {
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
	
	/*$.get("nav.json",function(data){
		var html = template("nav",data);
		$(".categoryBox").html(html);
	})*/
	
	
	/*轮播图start*/
	var i = 0;
	var timer = null;
	var thisLi = $(".bigUl li");
	function move(){
		thisLi.eq(i).fadeIn(500).siblings().fadeOut(300);
		$(".smallUl li").eq(i).addClass("on").siblings().removeClass("on");
	}
	move();
	//小点
	/*$(".smallUl li").hover(
		function(){
			
			
		},
		function(){
			
		}
	)*/
	
	
	timer = setInterval(function(){
		
		i++;
		if(i == thisLi.length){
			i = 0;
		}
		move();
	},2500)
	
	
	
	/*$(".bigImg").hover(
		function(){
			
		}
	)*/
	/*轮播图end*/
	
	/*Tab栏start*/
	var liLists = $(".indexTabNav li");
	for(let i in liLists){
		liLists.eq(i).on("mouseover",function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".indexTabCon").eq(i).show().siblings().hide();
		})
	}
	
	var newList = $(".indexTabNewNav li");
	for(let j in newList){
		newList.eq(j).on("mouseover",function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".indexTabNewList").eq(j).show().siblings().hide();
		})
	}
	
	/*Tab栏end*/
})