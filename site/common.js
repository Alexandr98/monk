$(document).ready(function(){
	$(".section[data-type='backgriound']").each(function(){
		var $bgodj = $(this);
		$(window).scroll(function(){
			var yPos = ($(window).scrollTop()/$bgobj.data("speed"));
			var coords = "50%" + yPos + "px";
			$bgobj.css("background-position",coords);
	     	});
	    });
	});
                        
