(function($) {
	"use strict"; // Start of use strict
	$('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

        /* Closes the Responsive Menu on Menu Item Click */
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

	$('#mainNav').affix({
        offset: {
            top: 300
        }
    })

})(jQuery);