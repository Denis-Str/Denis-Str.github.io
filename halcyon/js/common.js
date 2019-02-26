$(function () {

    // Custom JS

    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });

    $('.slide-one').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        responsive:{
            421:{
                items:1,
            },
            768: {
                items: 1
            }
        }
    });

    $('.slider-two').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        responsive:{
            421:{
                items:1,
            },
            768: {
                items: 3
            }
        }
    });

    $('.slider-three').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        responsive:{
            421:{
                items:1,
            },
            768: {
                items: 3
            }
        }
    });

    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.menu').toggleClass('menu--hidden')
    });

    $('.send').click(function (event) {
        event.preventDefault()
    });


    // const hamburger = document.querySelector('.hamburger');
    // const menu = document.querySelector('.menu');
    //
    // hamburger.addEventListener('click', () => {
    //     hamburger.classList.toggle('is-active');
    //     menu.classList.toggle('menu--hidden');
    // });

});
