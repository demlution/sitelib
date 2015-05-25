function banner(){	
	var bn_id = 0;
	var bn_id2= 1;
	var speed33=5000;
	var qhjg = 1;
    var MyMar33;
	$("#banner .d1").hide();
	$("#banner .d1").eq(0).fadeIn("slow");
	if($("#banner .d1").length>1)
	{
		$("#banner_id li").eq(0).addClass("nuw");
		function Marquee33(){
			bn_id2 = bn_id+1;
			if(bn_id2>$("#banner .d1").length-1)
			{
				bn_id2 = 0;
			}
			$("#banner .d1").eq(bn_id).css("z-index","2");
			$("#banner .d1").eq(bn_id2).css("z-index","1");
			$("#banner .d1").eq(bn_id2).show();
			$("#banner .d1").eq(bn_id).fadeOut("slow");
			$("#banner_id li").removeClass("nuw");
			$("#banner_id li").eq(bn_id2).addClass("nuw");
			bn_id=bn_id2;
		};
	
		MyMar33=setInterval(Marquee33,speed33);
		
		$("#banner_id li").click(function(){
			var bn_id3 = $("#banner_id li").index(this);
			if(bn_id3!=bn_id&&qhjg==1)
			{
				qhjg = 0;
				$("#banner .d1").eq(bn_id).css("z-index","2");
				$("#banner .d1").eq(bn_id3).css("z-index","1");
				$("#banner .d1").eq(bn_id3).show();
				$("#banner .d1").eq(bn_id).fadeOut("slow",function(){qhjg = 1;});
				$("#banner_id li").removeClass("nuw");
				$("#banner_id li").eq(bn_id3).addClass("nuw");
				bn_id=bn_id3;
			}
		})
		$("#banner_id").hover(
			function(){
				clearInterval(MyMar33);
			}
			,
			function(){
				MyMar33=setInterval(Marquee33,speed33);
			}
		)	
	}
	else
	{
		$("#banner_id").hide();
	}
}
banner();

//索引运动动画
  var toRightImg1=null;
  var toRightImg2=null;
  var toLeftWord1=null;
  var toLeftWord2=null;
  var toGray=null;

$$('.index-nav-body-item').addEvent('mouseenter',function(){
  
    toRightImg1=this.getElement('div[class="item-pic"]');
    toRightImg2=this.getElement('div[class="item-pic2"]');
    toLeftWord1=this.getElement('div[class="item-info"]');
    toLeftWord2=this.getElement('div[class="item-info2"]');
    toGray=this.getElement('div[class*="index-nav-body-bg"]');

    startMove(toRightImg1,77,250);
    startMove(toRightImg2,-100,77);
    startMove(toLeftWord1,41,-175);
    startMove(toLeftWord2,250,41);  
    startOpacity(toGray,0,1)   

})


$$('.index-nav-body-item').addEvent('mouseleave',function(){
  toRightImg1=this.getElement('div[class="item-pic"]');
  toRightImg2=this.getElement('div[class="item-pic2"]');
  toLeftWord1=this.getElement('div[class="item-info"]');
  toLeftWord2=this.getElement('div[class="item-info2"]');
  toGray=this.getElement('div[class*="index-nav-body-bg"]');

      startMove(toRightImg1,250,77);
    startMove(toRightImg2,77,-100);
    startMove(toLeftWord1,-175,41);
    startMove(toLeftWord2,41,250);  
    startOpacity(toGray,1,0)   
})

  function startMove(obj,start,end){
    obj.set('morph', {duration: 400,link: "ignore",transition: Fx.Transitions.Sine.easeOut});
    obj.morph({'left': [start,end],});
  }
 function startOpacity(obj,start,end){
    obj.set('morph', {duration: 400,link: "ignore",transition: Fx.Transitions.Sine.easeOut});
    obj.morph({'opacity': [start,end],});
  }


 $('.wei_alert .close').click(function(){
            $(this).parents('.wei_alert').hide();
        })
        //$('.five .app').stop(true,false).hover(function(){
//          $('.app-right-top,.app-content,.app-down').css({right:'-450px'})
//          $(this).find('.app-left').hide().fadeIn(2000)
//          $(this).find('.app-right-top').animate({right:'10px'},500)
//          $(this).find('.app-content').animate({right:'10px'},600)
//          $(this).find('.app-down').animate({right:'10px'},800)
//      },function(){
//          
//      })
        $('.five-tab strong').each(function(i){
            $(this).click(function(){
                $(this).addClass('dq').siblings('strong').removeClass('dq');
                $(this).parent().siblings('.tablist').eq(i).show().siblings('.tablist').hide();
            $('.app-right-top,.app-content,.app-down').css({right:'-450px'})
                $(this).parent().siblings('.tablist').eq(i).find('.app-left').hide().fadeIn(2000);
                $(this).parent().siblings('.tablist').eq(i).find('.app-right-top').animate({right:'10px'},500)
                $(this).parent().siblings('.tablist').eq(i).find('.app-content').animate({right:'10px'},600)
                $(this).parent().siblings('.tablist').eq(i).find('.app-down').animate({right:'10px'},800)
            })
        })
        
        //edit for yemy-rui 20140822   报名表单提交
        $('#signupForm').bind('submit',function(){
            var form = $(this);
            var name = form .find('input[name="name"]');
            var email = form .find('input[name="email"]');
            var mobile = form .find('input[name="mobile"]');
            var sure = form .find('input[name="sure"]');
            var age = form .find('input[name="age"]');
            var note = form .find('textarea[name="note"]');
            if(name.val()==''){
                alert('请输入姓名');
                name.focus();
                return false;
            }
            if(age.val()!=''&&!/^\d+$/.test(age.val())){
                alert('年龄必须为数字');
                age.focus();
                return false;
            }
            if(email.val()==''){
                alert('请输入Email');
                email.focus();
                return false;
            }
            if(!/\w@\w*\.\w/.test(email.val())){
                alert('Email格式错误');
                email.focus();
                return false;
            }
            if(mobile.val()==''){
                alert('请输入手机号码');
                mobile.focus();
                return false;
            }
            if(!/(^1[3|4|5|7|8]\d{9}$)|(^\++\d{2,}$)/.test(mobile.val())){
                alert('手机号码格式错误');
                mobile.focus();
                return false;
            }
            if(note.val()==''){
                alert('请输入观展目的');
                note.focus();
                return false;
            }
            if(!sure.is(':checked')){
                alert('本人承诺必选');
                sure.focus();
                return false;
            }
            var param = {name:name.val(),email:email.val(),mobile:mobile.val(),age:age.val(),note:note.val()};
            $.post('./?a=ajax&m=ajax_signup',param,function(result){
                result = JSON.parse(result);
                alert(result.msg);
                if(result&&result.rs){
                    form.find('textarea,input:not([type="submit"])').val('');
                    sure.prop('checked',false);
                    form.next().show().find('img').attr('src',result['dir']);
                }
            });
            return false;
        });
 (function(){
        
        var layer = $("#video_layer");
        var layer_width = layer.width();
        var layer_height = layer.height();
        
        var section = layer.parent();
        var section_width = section.width();
        var section_height = section.height();
        
        layer.css({
            left: (section_width - layer_width) / 2,
            top: (section_height - layer_height) / 2
        });
        
        var userAgent = navigator.userAgent.toLowerCase(); 
        var msie = /msie/.test(userAgent) && !/opera/.test(userAgent);
        
        if(msie && $.browser.version < 10){
            $("body").addClass("ltie10");
        }
        
        $(".header-wrapper").remove();
        
        setTimeout(function(){
            $(".section_1").addClass("active");
        }, 200);
        
        var $cover = $(".section_1 .mobile_cover");
        var $chip1 = $(".section_1 .chip_1");   /* 120 - 280 */
        var $chip2 = $(".section_1 .chip_2");   /* 20 - 240 */
        var $chip3 = $(".section_1 .chip_3");   /* 90 - 320 */
        var $chip4 = $(".section_1 .chip_4");   /* 118 - 250 */
        var $chip5 = $(".section_1 .chip_5");   /* 96 - 190 */
        
        var max_height = 450;
        
        /*
        var doScroll = function(){

            var top = $(document).scrollTop();
            
            if(top > max_height){
                $(".section_1").removeClass("active");
                return;
            }
            
            $(".section_1").addClass("active");
            
            var ratio = top / max_height;
            
            $chip1.css({left: 120 + ratio * (350 - 120)});
            $chip2.css({left: 20 + ratio * (230 - 20)});
            $chip3.css({left: 90 + ratio * (380 - 90)});
            $chip4.css({left: 118 + ratio * (350 - 118)});
            $chip5.css({left: 96 + ratio * (450 - 96)});
            
            if(top == 0){
                $chip1.animate({opacity: 0});
                $chip2.animate({opacity: 0});
                $chip3.animate({opacity: 0});
                $chip4.animate({opacity: 0});
                $chip5.animate({opacity: 0});
                $cover.hide();
            }else{
                $chip1.css({opacity: 1});
                $chip2.css({opacity: 1});
                $chip3.css({opacity: 1});
                $chip4.css({opacity: 1});
                $chip5.css({opacity: 1});
                $cover.show();
            }
        }*/

        if(msie && $.browser.version < 9){

            $chip1.hide();
            $chip2.hide();
            $chip3.hide();
            $chip4.hide();
            $chip5.hide();
            $cover.hide();

        }else{
        
            setTimeout(function(){
                $chip1.animate({
                    left: 316
                }, 700, function(){
                    $chip1.animate({opacity: 0});
                    $chip1.addClass("chip_bigger");
                    $cover.hide();
                });
            }, 0 + 700);

            setTimeout(function(){
                $chip2.animate({
                    left: 216
                }, 700, function(){
                    $chip2.addClass("chip_bigger");
                    $chip2.animate({opacity: 0});
                });
            }, 300 + 700);

            setTimeout(function(){
                $chip3.animate({
                    left: 286
                }, 700, function(){
                    $chip3.animate({opacity: 0});
                    $chip3.addClass("chip_bigger");
                });
            }, 400 + 700);

            setTimeout(function(){
                $chip4.animate({
                    left: 314
                }, 700, function(){
                    $chip4.animate({opacity: 0});
                    $chip4.addClass("chip_bigger");
                });
            }, 600 + 700);

            setTimeout(function(){
                $chip5.animate({
                    left: 292
                }, 500, function(){
                    $chip5.animate({opacity: 0});
                    $chip5.addClass("chip_bigger");
                });
            }, 650 + 700);
        }
        
        //$(document).scroll(doScroll);
        
        //doScroll();

        
        $(".section_1 .video_image").click(function(){
            if(!video_loaded){
                playVideo(vid);
                video_loaded = true;
            }
            $("#video_layer").show();
        });
        
        $("#video_layer .close_button").click(function(){
            $("#video_layer").hide();
            player.pause();
        });
        
        $(".section_2 .tab").mouseover(function(){
            var n = parseInt(this.className.replace(/[a-zA-Z_ ]+/g, ""), 10);
            
            $container = $(this).parent();
            $container.find(".tab").removeClass("big middle")
            for(var i = 1; i <= 5; i ++){
                if(i == n){
                    $container.find(".tab_" + i).addClass("big");
                }else if(i == (n - 1) || i == (n + 1)){
                    $container.find(".tab_" + i).addClass("middle");
                }
            }
            
            $container.find(".content").removeClass("current");
            $container.find(".content_" + n).addClass("current");
        });
        
        
        var case_width = 990 + 100;
        var case_visible_width = 980;
        var win_width = $(document).width();
        var offset_width = (win_width - case_visible_width) / 2;
        var case_count = CASES.length;
        var $case_container = $(".section_3 .cases");
        var current_number = 1;
        var moving = false;
        
        var html = "";
        for(var i = 0; i < case_count; i ++){
            html += "<div class='case case_"+(i + 1)+"'>";
            html += "<div class='box1'><img src='"+CASES[i].pic1+"' /></div>";
            //html += "<div class='box'><img src='"+CASES[i].pic2+"' /></div>";
            html += "<div class='box text'><img src='"+CASES[i].qr+"' /><p>"+CASES[i].text+"</p></div>";
            html += "</div>";
        }
        $(".section_3 .cases").html(html);
        
        var move_case = function(n){
            $case_container.animate({
                left: - 1 * (n - 1) * case_width +  offset_width
            });
            
            for(var i = 1; i <= case_count; i ++){
                if(i == n){
                    $(".section_3 .cases .case_" + i).css({opacity: 1});
                }else{
                    $(".section_3 .cases .case_" + i).css({opacity: 0.3});
                }
            }
        }
        
        move_case(1);
        
        $(".section_3 .cases").width(case_count * case_width + 100);
        
        $(".section_3 .left_button").click(function(){
            
            if(moving){
                return;
            }
            
            moving = true;
            
            if(current_number > 1){
                current_number --;
                move_case(current_number);
                
                moving = false;
            }else{
                var width = 200;
                var left = $case_container.offset().left;
                $case_container.animate({
                    left: left + width
                }, 500, function(){
                    $case_container.animate({
                        left: left
                    }, 500, function(){
                        moving = false;
                    });
                });
            }
        });
        
        $(".section_3 .right_button").click(function(){
            
            if(moving){
                return;
            }
            
            moving = true;
            
            if(current_number < case_count){
                current_number ++;
                move_case(current_number);
                
                moving = false;
            }else{
                var width = 200;
                var left = $case_container.offset().left;
                $case_container.animate({
                    left: left - width
                }, 500, function(){
                    $case_container.animate({
                        left: left
                    }, 500, function(){
                        moving = false;
                    });
                });
            }
        });
        
        /*
        var navf = false;
        var changeBanner = function(n){
            
            $("#banner-nav a").removeClass("active");
            
            $("#banner-nav a[data-nav="+n+"]").addClass("active");
            
            $(".section_1 .bg").animate({opacity: 0}, "slow", function(){
                $(".section_1").removeClass("nav1 nav2").addClass("nav" + n);
                $(".section_1 .bg").animate({opacity: 1}, "slow");
            });
            
            navf = !navf;
        }

        var _changeTimer = 0;
        var changeBannerInterval = function(){

            clearInterval(_changeTimer);

            _changeTimer = setInterval(function(){
                changeBanner(navf ? 1 : 2);
            }, 5000);
        }

        changeBannerInterval();
        
        //首页banner
        $("#banner-nav a").click(function(){
            var nav = $(this).data("nav");
            
            changeBanner(nav);
            
            if(_changeTimer > 0){
                clearInterval(_changeTimer);
                
                changeBannerInterval();
            }
        }).mouseover(function(){
            clearInterval(_changeTimer);
        }).mouseout(function(){
            changeBannerInterval();
        });
        */
        
    })();
    