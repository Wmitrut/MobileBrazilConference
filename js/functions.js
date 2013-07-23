!function ($){
	
    "use strict";

    $(document).ready(function(){
    	
		$('.nav a').click(function(e){
			$.scrollTo( this.hash || 0, 500);
			e.preventDefault();
		});

		$('#brand').click(function () {
			$('body,html').animate({ scrollTop: 0}, 800);
			return false;
		});

		$('.anchorLink').click(function() {
        	$('.nav-collapse').collapse('toggle');
    	});
	});

}(window.jQuery);