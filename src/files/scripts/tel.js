// JavaScript Document

$(document).ready(function(){
	
	$('.youshilist > li').each(function(i){						
		$(this).hover(function(){
			$('.yshover').stop().animate({left: i*150},300);
			$('.ystextlist').stop().animate({top:i*-85+10},200);
		});						
	});
	
	$('.youshilist > li').hover(function(){	
		$(this).css({color:'#4093d8',cursor:'pointer'})
			},function(){
		$(this).css({color:''})
	});

	$('.youshtext > p').each(function(i){
		$(this).css({top: i*50+15});								  
	});
	
});

$(function(){
	$(".wj-navcot li").eq(4).addClass("on")
})
