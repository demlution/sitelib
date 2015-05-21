//==============================站点变动方法，根据需要进行修改==============================
//Make by demlution
//2012.07.15
//==============================页面加载时操作==============================//

//用户后台图片自适应
$(window).load(function(){
	$(".article_con img").each(function(){
		if($(this).width()>732){
			$(this).width(732)
		}
	})
})
$(document).ready(function () {
	Navtab();   //导航切换
	Searchpress();//搜索框
	addFocus();
	clearFocus();
	// Downlist(); //仿下拉列表
	/* SearchTab();//内页面搜索函数 */
	tipdown();//顶部下拉
});

/*** 顶部下拉 ***/
function tipdown(){
	$(".my_shopcat").hover(function(){
		$(this).find(".cat_up").addClass("cat_down");
		$(this).find(".down_list").show();
	},function(){
		$(".cat_up").removeClass("cat_down");
		$(".down_list").hide();			
	})
}
/*** 导航背景切换 ***/
function Navtab(){
	$(".search-nav li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".sec_cue").html($(this).attr('data-label'));
		$("#search-model-name").val($(this).attr('data-model'))
	}).eq(0).trigger("click");
}

//搜索文本框事件
//function addFocus(){
//	$(".sec_cue").click(function(){
//		$(".store_search").focus();
//		})
//	}
//层内的link点击事件，注意让事件停止冒泡
function addFocus(){  
$(".search-pos").click(function(event){
	$(".sec-ipt").focus();
    event=event||window.event;  
    event.stopPropagation();  
});
}
  
//点击层外，隐藏这个层。由于层内的事件停止了冒泡，所以不会触发这个事件
function clearFocus(){   
	$(document).click(function(e){
		$(".search-pos").blur();
	}); 
	$(".sec-ipt").focus(function(){
		$(".sec_cue").css("color", "#ccc");
	})
	$(".search-pos").blur(function(){
		$(".sec_cue").css("color", "#999");
		var stxt = $(".sec-ipt").val();
		if("" == stxt){
			$(".sec_cue").show();
		}
	})
}
function Searchpress(){
	var sival = $(".sec-ipt").val();
	if(sival!==""){
		$(".sec_cue").hide();
		}
	$(".sec-ipt").keydown(function(){
		$(".sec_cue").hide();
	})
}

/*** 仿下拉列表事件 ****/
function Downlist(){
	$("#downlist").click(function(){
		if($("#d_list").is(":visible")){	//判断是否显示作处理
			$("#d_list").slideUp(200);
		}else{
			$("#d_list").slideDown(200);
		}
		return false;
	});		
	$("#d_list li").hover(function(){		// 鼠标悬停效果
		$(this).addClass("hove");
	}, function(){
		$(this).removeClass("hove");		
	}).click(function(){
		$("#keyword").val($(this).text());				
		var $litxt = $("#d_list li");
		$litxt.show();
		if($("#keyword").val() == $(this).text()){
				$(this).hide();
			}		
		$("#d_list").hide();
		return false;
	}).eq(0).trigger("click");
	$("body").click(function(){
		$("#d_list").slideUp(100);						 
	});
}

