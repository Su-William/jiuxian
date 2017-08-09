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
						html += "<tr class='cTab-tr' data-Id='"+i+"'><td class='cTab-check'><input class='checkboxs' name='cart_item' cart_unit='item-5074' checked='' type='checkbox'> </td><td class='cTab-name'><div class='cn-Pic'><a target='_blank' href='detail.html?id="+i+"'><img src='"+data[j].Img+"' width='52' height='52'></a></div><div class='cn-Con'><p class='cn-Con-Name2'><a target='_blank' href='detail.html?id="+i+"'>"+data[j].Tit+"</a></p></div></td><td class='cTab-jxPri'><div class='clubPrice'><em>￥<span>"+data[j].Pic+"</span></em></div></td><td class='cTab-gold'> 78金币 </td><td class='cTab-amount'><div class='cAmount-add'><span class='cartIcon ca-minus' cart_unit='item-5074'></span> <input class='ctxt' value='"+obj[i]+"' name='cart_unit_count' cart_unit='item-5074' restriction='-1' stock='1517' src='0' type='text'> <span class='cartIcon ca-plus plusOn' cart_unit='item-5074' restriction='-1' stock='1517'></span></div><div class='cAmount-pro numLimited'>有货</div></td><td class='cTab-subt'> </td><td class='cTab-ope'><div class='opeBox'><a href='javascript:void(0);' class='delete' cart_unit='item-5074'>删除</a><a href='javascript:void(0);' class='sc' proid='5074'>收藏</a></div></td></tr>"
					}
					
				}
				
			}
			$(".cart-tabBox tbody").html(html);
			$(".cart-tabBox tbody").find(".ctxt").val();
			
			var Tr = $(".cart-tabBox tbody").find("tr");
			console.log(Tr);
			
			for(let k=0; k < Tr.length; k++){
				var Num = Tr.eq(k).find(".ctxt").val();
				Tr.eq(k).find(".cTab-subt").html(Num* Tr.eq(k).find(".clubPrice span").html());
				
				//减
				Tr.eq(k).find(".ca-minus").click(function(){
					var Val = $(this).siblings(".ctxt").val();
					if(Val == 1){
						Val = 1;
					}else{
						Val -= 1;
					}
					$(this).siblings(".ctxt").val(Val);
					var sum = Val * Tr.eq(k).find(".clubPrice span").html();
					Tr.eq(k).find(".cTab-subt").html(sum);
					var b = 0;
					$(".cTab-subt").each(function(){
						var a = parseInt($(this).html());
						b += a;
						$(".sumMoney").html(b);
					})
					Tr.eq(k).attr("data-Id");
					obj[Tr.eq(k).attr("data-Id")] = Val;
					setCookie("cart",JSON.stringify(obj),7);
				})
				
				//加
				Tr.eq(k).find(".ca-plus").click(function(){
					var Val = parseInt($(this).siblings(".ctxt").val());
					Val += 1;
					$(this).siblings(".ctxt").val(Val);
					var sum = Val * Tr.eq(k).find(".clubPrice span").html();
					Tr.eq(k).find(".cTab-subt").html(sum);
					
					var b = 0;
					$(".cTab-subt").each(function(){
						var a = parseInt($(this).html());
						b += a;
						$(".sumMoney").html(b);
					})
					
					Tr.eq(k).attr("data-Id");
					obj[Tr.eq(k).attr("data-Id")] = Val;
					setCookie("cart",JSON.stringify(obj),7);
				})
				
				//总计
				var b = 0;
				$(".cTab-subt").each(function(){
					var a = parseInt($(this).html());
					b += a;
					$(".sumMoney").html(b);
				})
				//删除数据
				Tr.eq(k).find(".delete").click(function(){
					Tr.eq(k).hide();
					Tr.eq(k).attr("data-Id");
					delete obj[Tr.eq(k).attr("data-Id")];
					setCookie("cart",JSON.stringify(obj),7);
				})
			}
			
			
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









