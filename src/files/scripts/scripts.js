console.log('hi');
$(function(){
	var $flow = $('#flow');
	$flow.imagesLoaded(function(){
		$flow.masonry({
			itemSelector: '.item',
			columnWidth: 210,
			gutterWidth: 20,
            isAnimated: true,
		});
	});
});
