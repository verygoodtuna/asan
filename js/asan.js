$(function () {
    $('.header .bottom_head .mobile_btn').on('click', function () {
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    })

    $('.header .gnb ul>li').on('click', function (e) {
        e.preventDefault();
        $('.gnb ul>li .lnb').toggleClass('on')
    })

    // $('.gnb').on('wheel', function (e) {
    //     if ($('.gnb .lnb').hasClass('on')) {
    //       e.preventDefault();
    //     }
    //     else {
    //         e.preventDefault();
    //     }
    // })
  

    $('.a_slide').slick ({
        arrows: false,
        dots: true,
    })

    $('.s_slide').slick ({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    })

    $('.tv_slide').slick ({
        arrows: false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    $('.tv .prev').on('click', function () {
        $('.tv_slide').slick('slickPrev');
    })

    $('.tv .next').on('click', function () {
        $('.tv_slide').slick('slickNext');
    })

    $('.imfor_slide').slick ({
        arrows: false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    $('.imfor .prev').on('click', function () {
        $('.imfor_slide').slick('slickPrev');
    })

    $('.imfor .next').on('click', function () {
        $('.imfor_slide').slick('slickNext');
    })

    $('.cus_slide').slick ({
        arrows: false,
        slidesToShow: 6,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })

    
    $('.main_customer .prev').on('click', function () {
        $('.cus_slide').slick('slickPrev');
    })

    $('.main_customer .next').on('click', function () {
        $('.cus_slide').slick('slickNext');
    })
})