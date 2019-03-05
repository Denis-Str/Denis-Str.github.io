$(function () {
	// Custom JS

    $(document).ready(function() {
        $('#my-menu').mmenu({
            'extensions': [
                'widescreen',
                'theme-white',
                'border-offset',
                'fx-menu-slide',
                'fx-listitems-slide',
                'position-right',
                'pagedim-black',
            ],
            'onClick': {
                close: true,
                preventDefault: false,
            },
        });
        let api = $('#my-menu').data('mmenu');
        api.bind( "open:finish", function() {
            $('#my-icon').addClass( "is-active" );
        });
        api.bind( "close:finish", function() {
            $('#my-icon').removeClass( "is-active" );
        });

    });

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 1,
            autoplay: true,
            margin:10,
            responsiveClass:true,
            dots: true,
            loop: true,
            smartSpeed: 700,
            autoplayTimeout: 3000,
        });
    });
});
