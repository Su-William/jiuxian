$(function(){
	var Verification = (function() {
		var VerNum = function() {
			var str = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
	
			var code = "";
			for(var i = 0; i < 4; i++) {
				var randNum = parseInt(Math.random() * str.length);
				var s = str[randNum];
				code += s;
			}
			$(".regCapIcon").html(code);
		}
		return {
			VerNum: VerNum
		}
	})()
	Verification.VerNum();
	$(".regCapIcon").click(function() {
		var code = Verification.VerNum();
		$(".regCapIcon").html(code);
	})
	
	var Verify = function(){
		$("#phone").focus(function(){
			$("#phone").siblings(".regFalse").hide().next().hide().next().show();
		})
		$("#phone").blur(function(){
			if(this.value == ""){
				$("#phone").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().show().next().hide();
			}
			var regPhone = /0?(13|14|15|18)[0-9]{9}/;
			if(!regPhone.test(this.value)){
	            $("#phone").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().html("请输入正确的手机号码").show().next().hide();
	       }else{
	       		$("#phone").css({"border":"1px solid #dcdcdc"}).siblings(".regFalse").addClass("regTrue").show().next().hide().next().hide();
	       }
		})
		$("#phone_verification").focus(function(){
			$("#phone_verification").siblings(".poiFalse").hide();
		})
		$("#phone_verification").blur(function(){
			if(this.value == ""){
				$("#phone_verification").siblings(".poiFalse").show();
			}
		})
		$("#phoneverification").focus(function(){
			$("#phoneverification").siblings(".regFalse").hide().next().hide();
		})
		$("#phoneverification").blur(function(){
			if(this.value == ""){
				$("#phoneverification").siblings(".regFalse").css({"right":"160px"}).show().next().css({"right":"154px"}).show();
			}
		})
		$("#phonePwd").focus(function(){
			$("#phonePwd").siblings(".regFalse").hide().next().hide().next().show();
		})
		$("#phonePwd").blur(function(){
			if(this.value == ""){
				$("#phonePwd").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().show().next().hide();
			}
			var regPwd = /^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{8,20}$/ ;
			if(!regPwd.test(this.value)){
				
				if(this.value.length < 8){
					$("#phonePwd").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().html("密码长度为8-20位").show().next().hide();
				}else{
					$("#phonePwd").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().html("数字、字母、符号至少包含两种").show().next().hide();
				}
			}else{
				$("#phonePwd").css({"border":"1px solid #dcdcdc"}).siblings(".regFalse").addClass("regTrue").show().next().hide().next().hide();
			}
		})
		
		$("#phoneRePwd").focus(function(){
			$("#phoneRePwd").siblings(".regFalse").hide().next().hide();
		})
		
		$("#phoneRePwd").blur(function(){
			
			var passVal = $("#phonePwd").val();
			if(this.value !== passVal){
				console.log(this.value,passVal);
				
				$("#phoneRePwd").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().html("两次输入密码不一致").show();
			}else{
				if(this.value == ""){
					$("#phoneRePwd").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().html("请再次输入密码").show();
				}else{
					$("#phoneRePwd").css({"border":"1px solid #dcdcdc"}).siblings(".regFalse").addClass("regTrue").show().next().hide();
				}
			}
		})
		
	}
	Verify();
	
	$("#phoneSubit").click(function(){
		if($("#phone").val() == ""){
			$("#phone").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().show().next().hide();
			return;
		}
		var regPhone = /0?(13|14|15|18)[0-9]{9}/;
		if(!regPhone.test($("#phone").val())){
            $("#phone").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().html("请输入正确的手机号码").show().next().hide();
            return;
       }else{
       		$("#phone").css({"border":"1px solid #dcdcdc"}).siblings(".regFalse").addClass("regTrue").show().next().hide().next().hide();
       }
        
        
		if($("#phone_verification").val() == ""){
			$("#phone_verification").siblings(".poiFalse").show();
			return;
		}
		if($("#phone_verification").val().toLowerCase() !== $(".regCapIcon").html().toLowerCase()){
			$("#phone_verification").siblings(".poiFalse").html("请重新输入验证码").show();
			return;
		}
		if($("#phoneverification").val() == ""){
			$("#phoneverification").siblings(".regFalse").css({"right":"160px"}).show().next().css({"right":"154px"}).show();
			return;
		}
		if($("#phonePwd").val() == ""){
			$("#phonePwd").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().show().next().hide();
			return;
		}
		var regPwd = /^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{8,20}$/ ;
		if(!regPwd.test($("#phonePwd").val())){
			if($("#phonePwd").val().length < 8){
				$("#phonePwd").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().html("密码长度为8-20位").show().next().hide();
			}else{
				$("#phonePwd").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().html("数字、字母、符号至少包含两种").show().next().hide();
			}
			return;
		}else{
			$("#phonePwd").css({"border":"1px solid #dcdcdc"}).siblings(".regFalse").addClass("regTrue").show().next().hide().next().hide();
		}
	
		var passVal = $("#phonePwd").val();
		if($("#phoneRePwd").val() !== passVal){
			$("#phoneRePwd").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().html("两次输入密码不一致").show();
			return;
		}else{
			if(passVal == ""){
				$("#phoneRePwd").css({"border":"1px solid #ff6666"}).siblings(".regFalse").show().next().html("请再次输入密码").show();
				return;
			}else{
				$("#phoneRePwd").css({"border":"1px solid #dcdcdc"}).siblings(".regFalse").addClass("regTrue").show().next().hide();
			}
		}
		
		document.cookie = name + "=" + $("#phone").val()+$("#phonePwd").val() + ";"
		location.href='logIn.html';
		
	})
	
	
	
	
	
	
})