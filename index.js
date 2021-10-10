
$(function() {
    $(".p3_owl1").owlCarousel({
        loop: true,
        center: true,
        touchDrag: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        responsive: {
            320: {
                items: 3
            },
            575: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });
});