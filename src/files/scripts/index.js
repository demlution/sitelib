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

 $(document).ready(function(){
                $('#foo2').carouFredSel({
                    //auto: true,
                    prev: '#prev2',
                    next: '#next2',
                    pagination: "#pager2",
                    mousewheel: true,
                    swipe: {
                        onMouse: true,
                        onTouch: true
                    }
                });
            });


        $(function () {
            SexyLightbox.initialize({ color: 'white', dir: 'http://www.demlution.com/site_media/static/imgs/' });
        })
 
//tab
var curPortflioi = "page21";
var nn;
var curNumi=1;
var jj=0;
function showPagei(idi,nn,i){
	for(var j=1;j<=nn;j++){
		if(j==idi) {
			$("#box"+i+j).removeClass ();	
			$("#box"+i+j).addClass ("tab1");
			$("#page"+i+j).fadeIn(400);
			if(i==2) {
				//var hhh = $("#page"+i+j).height();
				//$("#page"+i+j).height($("#"+curPortflioi).height());
				//$("#page"+i+j).animate({height: hhh},400,'', function(){ if(curPortflioi != $(this).attr("id"))$(this).hide(); } );
				curPortflioi = "page"+i+j;
			}
		} else {
			$("#box"+i+j).removeClass ();	
			$("#box"+i+j).addClass ("tab2");	
			//$("#page"+i+j).fadeOut("fast");
			$("#page"+i+j).hide();
		}
	}
	
}
//services
$(".serBox").hover(
  function () {
	 $(this).children().stop(false,true);
	 $(this).children(".serBoxOn").fadeIn("slow");
     $(this).children(".pic1").animate({right: -110},400);
     $(this).children(".pic2").animate({left: 41},400);
     $(this).children(".txt1").animate({left: -240},400);
     $(this).children(".txt2").animate({right: 0},400);	 
	 }, 
  function () {
	 $(this).children().stop(false,true);
	 $(this).children(".serBoxOn").fadeOut("slow");
	 $(this).children(".pic1").animate({right:41},400);
     $(this).children(".pic2").animate({left: -110},400);
     $(this).children(".txt1").animate({left: 0},400);
     $(this).children(".txt2").animate({right: -240},400);	
  }
);



