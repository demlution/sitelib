console.log('hi');
$(".s-left .s-txt").focus(function(){
				$(this).animate({width:"150px"});
			});
			$(".s-left .s-txt").blur(function(){
				$(this).animate({width:"80px"});
			});