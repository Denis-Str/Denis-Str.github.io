$(function() {

	// Custom JS

    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.nav-menu').toggleClass('elem--hidden')
    });

    $('.search_field').click(function () {
        $('.search_field').toggleClass('elem--hidden')
    });

    function clock() {
        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let elemHour = document.getElementById('hour');
        let elemMin = document.getElementById('min');
        let elemSec = document.getElementById('sec');

        (min < 10) ? min = '0' + date.getMinutes() : date.getMinutes();
        (sec < 10) ? sec = '0' + date.getSeconds() : date.getSeconds();

        elemHour.innerText = `${ hour } `;
        elemMin.innerText = `${ min } `;
        elemSec.innerText = `${sec } `;
    }

    setInterval(() => {
             clock()
        }, 1000);
    });
