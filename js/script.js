$(document).ready(function(){
    setTimeout(function() {
        $('#loading').fadeOut();
    }, 1000)
});

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    navbar();
}

navbar();

$(window).on('resize', function() {
	navbar();
});


// Window Resize Mobile Menu Fix
function navbar() {
	var width = $(window).width();
    if (998 < width) {
        $('#navbar').show();
        $('#mobile-navbar').hide();
    } else {
        $('#navbar').hide();
        $('#mobile-navbar').show();
    }
}