$(function(){
	
	//获取cookie数据
	var str = getCookie("cart");
	if(!str){
		
	}else{
		$.get("js/productList.json",function(data){
			var obj = JSON.parse(str);
			var html = "";
			for(let j in data){
				for(let i in obj){
					if(data[j].Id == i){
						html += "<tr class='cTab-tr'><td class='cTab-check'><input class='checkboxs' name='cart_item' cart_unit='item-5074' checked='' type='checkbox'> </td><td class='cTab-name'><div class='cn-Pic'><a target='_blank' href='detail.html?id="+i+"'><img src='"+data[j].Img+"' width='52' height='52'></a></div><div class='cn-Con'><p class='cn-Con-Name2'><a target='_blank' href='detail.html?id="+i+"'>"+data[j].Tit+"</a></p></div></td><td class='cTab-jxPri'><div class='clubPrice'><em>￥<span>"+data[j].Pic+"</span></em></div></td><td class='cTab-gold'> 78金币 </td><td class='cTab-amount'><div class='cAmount-add'><span class='cartIcon ca-minus' cart_unit='item-5074'></span> <input class='ctxt' value='"+obj[i]+"' name='cart_unit_count' cart_unit='item-5074' restriction='-1' stock='1517' src='0' type='text'> <span class='cartIcon ca-plus plusOn' cart_unit='item-5074' restriction='-1' stock='1517'></span></div><div class='cAmount-pro numLimited'>有货</div></td><td class='cTab-subt'> </td><td class='cTab-ope'><div class='opeBox'><a href='javascript:void(0);' class='delete' cart_unit='item-5074'>删除</a><a href='javascript:void(0);' class='sc' proid='5074'>收藏</a></div></td></tr>"
					}
					
				}
				
			}
			$(".cart-tabBox tbody").html(html);
			$(".cart-tabBox tbody").find(".ctxt").val();
			
			var Tr = $(".cart-tabBox tbody").find("tr");
			var b = 0;
			for(let k in Tr){
				var Num = Tr.eq(k).find(".ctxt").val();
				Tr.eq(k).find(".cTab-subt").html(Num* Tr.eq(k).find(".clubPrice span").html());
				Tr.eq(k).find(".ca-minus").click(function(){
					var Val = $(this).siblings(".ctxt").val();
					if(Val == 1){
						Val = 1;
					}else{
						Val -= 1;
					}
					$(this).siblings(".ctxt").val(Val);
					/*var str = getCookie("cart");
					console.log(str);
					var Str = str.slice(1,str.length-1);
					console.log(Str);
					var arr = Str.split(",");
					console.log(typeof arr[k]);
					var arrNum = arr[k].split(":");
					console.log(arrNum[1]);
					arrNum = Val;
					console.log(arrNum);*/
					var sum = Val * Tr.eq(k).find(".clubPrice span").html();
					Tr.eq(k).find(".cTab-subt").html(sum);
					
				})
				Tr.eq(k).find(".ca-plus").click(function(){
					var Val = parseInt($(this).siblings(".ctxt").val());
					Val += 1;
					$(this).siblings(".ctxt").val(Val);
					var sum = Val * Tr.eq(k).find(".clubPrice span").html();
					Tr.eq(k).find(".cTab-subt").html(sum);
				})
				
				//总计
				/*var a = parseInt(Tr.eq(k).find(".cTab-subt").html());
				b = b + a;
				console.log(b);*/
				
				//删除数据
				Tr.eq(k).find(".delete").click(function(){
					Tr.eq(k).hide();
				})
				
				
				
			}
			//$(".sumMoney").html(b);
			
			$(".checkAll").click(function(){
				if(this.checked){
					
					$(".checkboxs").prop("checked", true);
				}else{
					$(".checkboxs").prop("checked", false);
				}
			})
			
			
			
		})
		
		
		
	}
	
	
	
	
	
	
	
	
})









