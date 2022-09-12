// Corousel

var owl = $('.owl-carousel');

owl.owlCarousel({
    center: true, 
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');

navBtn .onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
}