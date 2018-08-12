// fullpage customization
$('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    controlArrows: false,

    afterSlideLoad: function( slideIndex) {
        if(slideIndex == 0) {
            $.fn.fullpage.setAllowScrolling(false, 'up');
        }
    },

    onSlideLeave: function(slideIndex) {
        if(slideIndex == 0) {
            $.fn.fullpage.setAllowScrolling(true, 'up');
        }
    }
});

$(document).ready(function() {
    $(".logo-area").click(function() {
        $(this).toggleClass("new-p");
    });
});