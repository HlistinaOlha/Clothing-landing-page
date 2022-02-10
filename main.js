$(document).ready(function () {

    $('.pic-item-menu:nth-of-type(odd) .price').addClass('discount');

    const burgerMenuEl = $('.burger-menu');
    const cartBtn = $('.shopping-cart');

    burgerMenuEl.on('click', toggleNavMenu);
    $('.close-btn').on('click', toggleNavMenu);

    cartBtn.on('click', function (e) {
        e.preventDefault();
        toggleCartMenu();
    });

    function toggleNavMenu() {
        const navMenuEl = $('.nav-menu');

        if (navMenuEl.hasClass('hide-menu')) {
            burgerMenuEl.removeClass('show-burger-menu').addClass('hide-menu');
            navMenuEl.removeClass('hide-menu').addClass('show-menu');

        } else {
            burgerMenuEl.removeClass('hide-menu').addClass('show-burger-menu');
            navMenuEl.removeClass('show-menu').addClass('hide-menu');
        }
    }

    function toggleCartMenu() {
        const cartMenuEl = $('.shopping-cart-menu');

        if (cartMenuEl.hasClass('hide-menu')) {
            cartMenuEl.removeClass('hide-menu').addClass('show-menu');

        } else {
            cartMenuEl.removeClass('show-menu').addClass('hide-menu');
        }
    }

    $('.slide-insta-menu').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        centerMode: false,
        draggable: false,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 5,
                }

            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 5,
                }

            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    draggable: true,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    centerPadding: '40%',
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    draggable: true,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    centerPadding: '40%',
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    draggable: true,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    centerPadding: '40%',
                }
            }]
    });

    $('.slide-celeb-menu').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        centerMode: false,
        draggable: false,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 5,
                }

            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 5,
                }

            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    draggable: true,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    centerPadding: '50%',
                }
            },
            {
                breakpoint: 535,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    draggable: true,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    centerPadding: '40%',
                }
            }]
    })

    $('.slide').slick({

        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        centerMode: false,
        draggable: false,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 5,
                }

            }, {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 5,
                    centerMode: true,
                    draggable: true,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    centerPadding: '50%',
                }

            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    draggable: true,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    centerPadding: '49%',
                }

            }, {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    draggable: true,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    centerPadding: '49%',
                }
            }]
    });
});
