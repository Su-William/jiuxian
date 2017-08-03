$(function(){
	//表单验证
	var Verify = (function(){
		var Input = function(){
			$("#userName").focus(function(){
				if(this.value !== ""){
					$("#userName").siblings(".filter").children(".judgeDel").show();
				}else{
					$("#userName").removeClass("on").parents(".Frame").removeClass("wrong").children(".mistakeTip").hide();
				}
			})
			$("#userName").blur(function(){
				if(this.value == ""){
					
					$("#userName").addClass("on").parents(".Frame").addClass("wrong").children(".mistakeTip").show();
					$("#userName").siblings(".filter").children(".judgeDel").hide();
				}
			})
			$("#password").focus(function(){
				if(this.value !== ""){
					$("#password").siblings(".filter").children(".judgeDel").show();
				}else{
					$("#password").removeClass("on").parents(".Frame").removeClass("wrong").children(".mistakeTip").hide();
				}
			})
			$("#password").blur(function(){
				if(this.value == ""){
					
					$("#password").addClass("on").parents(".Frame").addClass("wrong").children(".mistakeTip").show();
					$("#password").siblings(".filter").children(".judgeDel").hide();
				}
			})
			$("#verification").focus(function(){
				if(this.value !== ""){
					$("#verification").siblings(".filter").children(".judgeDel").show();
				}else{
					$("#verification").removeClass("on").parents(".Frame").removeClass("wrong").children(".mistakeTip").hide();
				}
			})
			$("#verification").blur(function(){
				if(this.value == ""){
					$("#verification").addClass("on").parents(".Frame").addClass("wrong").children(".mistakeTip").show();
					$("#verification").siblings(".filter").children(".judgeDel").hide();
				}
			})
			$("#iphone").focus(function(){
				var regPhone = /^1\d{10}$/;
				console.log(this.value);
				if(this.value !== ""){
					$("#iphone").removeClass("on").parents(".Frame").removeClass("wrong").children(".mistakeTip").hide();
					$("#iphone").siblings(".mistakeTip02").hide()
				}else{
					$("#iphone").removeClass("on").parents(".Frame").removeClass("wrong").children(".mistakeTip").hide();
				}
			})
			$("#iphone").blur(function(){
				var regPhone = /^1\d{10}$/;
				if(this.value == ""){
					$("#iphone").addClass("on").parents(".Frame").addClass("wrong").children(".mistakeTip").show();		
					$("#iphone").siblings(".filter").children(".judgeDel").hide();
				}else{
					if(!regPhone.test(this.value)){
						$("#iphone").addClass("on").parents(".Frame").addClass("wrong").children(".mistakeTip").show();	
						$("#iphone").siblings(".mistakeTip02").show().css({"background":"#ed787f"});
					}
				}
			})
			$("#verificationTwe").focus(function(){
				if(this.value !== "" ){
					$("#verificationTwe").siblings(".filter").children(".judgeDel").show();
				}else{
					$("#verificationTwe").removeClass("on").parents(".Frame").removeClass("wrong").children(".mistakeTip").hide();
				}
			})
			$("#verificationTwe").blur(function(){
				if(this.value == ""){
					$("#verificationTwe").addClass("on").parents(".Frame").addClass("wrong").children(".mistakeTip").show();
					$("#verificationTwe").siblings(".filter").children(".judgeDel").hide();
				}
			})
			
		}
		
		return{
			Input : Input
		}
	})()
	
	Verify.Input();
	
	var Delete = (function(){
		var Del = function(){
			var oDel = $(".judgeDel");
			for(let i in oDel){
				oDel.eq(i).click(function(){
					if(i == 0){
						oDel.eq(i).parent().siblings("#userName").val("");
					}
					if(i == 1){
						oDel.eq(i).parent().siblings("#password").val("");
					}
				})
			}
		}
		return{
			Del : Del
		}
	})()
	Delete.Del();
	
	
	var Verification = (function(){
		var VerNum = function(){
			var str = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
			
			var code = "";
			for(var i = 0; i < 4; i++){
				var randNum = parseInt(Math.random()*str.length);
				var s = str[randNum];
				code+=s;
			}
			$(".refresh").find("i").html(code);
		}
		return {
			VerNum:VerNum
		}
	})()
	Verification.VerNum();
	$(".refresh").click(function(){
		var code = Verification.VerNum();
		$(".refresh").find("i").html(code);
	})
	$("#save").click(function(){
		var VerNum = $("#verification").val();
		if(VerNum.toLowerCase() !== $(".refresh i").html().toLowerCase()){
			$("#verification").addClass("on").parents(".Frame").addClass("wrong").children(".mistakeTip").show().html("验证码错误");
		}else{
			$("#verification").removeClass("on")
			$(".mistakeTip").hide();
		}
		
		var str = document.cookie;
		if(str){
			var userName = str.slice(0,11);
			var pasWrd = str.slice(11);
			$("#userName").val(userName);
			$("#password").val(pasWrd);
		}
		
		if($("#userName").val() == userName && $("#password").val() == pasWrd){
				//做判断,如果用户选择了七天免登陆，获取check;
				if($(".check").checked){
					var oDate = new Date();
					oDate.setDate(oDate.getDate()+7);
					document.cookie = name + "=" + $("#userName").val() + $("#password").val() + ";expires=" + oDate;
				}
				location.href = "index.html";
			}
			else{
				alert('请重新输入账户和密码');
				$("#userName").val("");
				$("#password").val("");
				$("#verification").val("");
				return false;
			}
			
	})
	
	$("#saveLogin").click(function(){
		var VerNum = $("#verificationTwe").val();
		if($("#iphone").val() == '13163296990'){
			if(VerNum.toLowerCase() !== $(".refresh i").html().toLowerCase()){
			$("#verificationTwe").addClass("on").parents(".Frame").addClass("wrong").children(".mistakeTip").show().html("验证码错误");
		}else{
			$("#verificationTwe").removeClass("on")
			$(".mistakeTip").hide();
			location.href='index.html';
		}
			
		}else{
				alert('手机号错误，请重新输入');
				$("#iphone").val("");
				$("#verificationTwe").val("");
				return false;
		}
	})
	
	function getCookie(){
		var str = document.cookie;
		if(str){
			var userName = str.slice(0,11);
			var pasWrd = str.slice(11);
			$("#userName").val(userName);
			$("#password").val(pasWrd);
		}
		
	}
	getCookie();
	
	
	
	$(".userLogin").click(function(){
		$(".userLogin").addClass("on").siblings().removeClass("on");
		$(".loginUsual").show().siblings(".loginMobile").hide();
	})
	$(".mobileLogin").click(function(){
		$(".mobileLogin").addClass("on").siblings().removeClass("on");
		$(".loginMobile").show().siblings(".loginUsual").hide();
	})
	
	$(".jx-ewmLoginLink").click(function(){
		$(".jx-ewmLoginLink").css({"display":"none"}).siblings(".jx-pcLoginLink").css({"display":"inline"}).siblings(".loginCon").hide().next().show();
	})
	$(".jx-pcLoginLink").click(function(){
		$(".jx-pcLoginLink").css({"display":"none"}).siblings(".jx-ewmLoginLink").css({"display":"inline"}).siblings(".loginCon").show().next().hide();
	})
	
	$(".scanErrorEwm").hover(
		function(){
			$(".scanErrorEwm").stop().animate({"left":"-80px"},500,function(){
				$(".tipImg").show();
			})
		},
		function(){
			$(".tipImg").hide();
			$(".scanErrorEwm").stop().animate({"left":0},300)
		}
	);
	
	
	
	
	
	
	
})