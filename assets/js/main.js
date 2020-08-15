(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();


        $('#mobile-menu-active').meanmenu({
            meanScreenWidth: "767",
            meanMenuContainer: '.menu-prepent',
        });



        $('.menu-open').click(function () {

            $('.site-menu-wrp').addClass('activee');


        });
        $('.menu-close').click(function () {

            $('.site-menu-wrp').removeClass('activee');


        });


        $(".rs-sldier-main").owlCarousel({
            items: 5,
            nav: false,
            dot: false,
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            stagePadding: 200,
            responsive: {
                0: {
                    items: 1,
                     stagePadding: 0,

                },
                768: {
                    items: 2,
                     stagePadding: 0,
                    

                },
                1000: {
                    items: 2,
                    stagePadding: 100,
                    

                },
                1200: {
                    items: 2,
                    stagePadding: 100,

                },
                1300: {
                    items: 2,
                    stagePadding: 200,

                },
            }


        });




    });


    jQuery(window).load(function () {


        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });





    });


}(jQuery));
