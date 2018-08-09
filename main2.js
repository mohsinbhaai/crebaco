var body = document.body;
var slider = new Swiper ('.slides-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true,
    onSlideChangeStart: function (swiper) {
        var currentSlide = swiper.slides[ swiper.activeIndex ];
        body.className = currentSlide.getAttribute( 'data-bg' );
        console.log( currentSlide.getAttribute( 'data-bg' ) );
    },
});