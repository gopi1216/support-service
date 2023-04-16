const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
new ResizeObserver(() => scroll.update()).observe(
    document.querySelector("[data-scroll-container]")
);

scroll.on('scroll', (position, limit, speed, direction) => {
    func_headerOpaque(position)
});


$(document).ready( function () {
});
$(window).on('load', function () {
    var mh =  $('.main-header').outerHeight();
    navHeightEdjest(mh);
});
$(window).resize(function () {
});
$(window).scroll(function () {
});

function func_headerOpaque(position) {
   var h =  $('.header-top').outerHeight();
   var mh =  $('.main-header').outerHeight();
   var mh_h = mh - h;
    if ((position.scroll.y) > h) {
        $(".main-header").addClass("top");
        $(".main-header").css( 'margin-top', -h + 'px' );
        navHeightEdjest(mh_h);
      } else {
        $(".main-header").css( 'margin-top', 0 + 'px' );
        $(".main-header").removeClass("top");
        navHeightEdjest(mh);
    }
}

function navHeightEdjest(mh) {
    if ($(window).width() < 991) {
        $('.navbar-collapse').css('top', mh + 'px')
    }
}

$(document).ready(function () {


    $('.info-services-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        // centerMode: true,
        // adaptiveHeight: true,
        // variableWidth: true,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            },

        ]

    });



    $('.info-attractions-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        // centerMode: true,
        // adaptiveHeight: true,
        variableWidth: true,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            },

        ]

    });

    $('.info-attractions-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        expandEventsScreen();
    });
    $('.info-attractions-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        expandEventsScreen();
    });

    function expandEventsScreen() {
        if ($(window).width() > 767) {
            var slide_w = $('.info-attractions-slider').outerWidth();
            // console.log(slide_w);
            var slide_w_item = slide_w / 5;
            // console.log(slide_w_item);

            $('.info-attractions-slider .slick-slide').css('width', slide_w_item + 'px');
            $('.info-attractions-slider .slick-current').css('width', slide_w_item * 2 + 'px');
        }

    }
    expandEventsScreen();

    $('.info-attractions-slider .slick-slide').click(function (e) {
        e.preventDefault();

        var slideno = $(this).data('slick-index');
        // alert(slideno);
        $('.info-attractions-slider').slick('slickGoTo', slideno);
        // expandEventsScreen();
    });


});



$(window).on("load", function () {
    gridAdjust(".info-wedding-cards .info-wrap");

    // if ($(window).width() > 767) {
    //     gridAdjust(".info-wedding-cards .info-wrap");
    // }
});

// Mobile Only Slider
$(document).ready(function () {
    gridAdjust(".info-wedding-cards .info-wrap");
});

$(window).resize(function () {
    gridAdjust(".info-wedding-cards .info-wrap");

});

// Trigger when window is resized

function gridAdjust(targertSteing) {
    var targertHight = $(targertSteing);
    targertHight.css("height", "auto");
    var heights = [];
    targertHight.each(function () {
        var elem = $(this);
        var height = elem.outerHeight();
        heights.push(height);
    });
    heights = heights.sort(function (a, b) {
        return b - a;
    });
    console.log(heights);
    var tallest = heights[0];
    targertHight.css("height", tallest + "px");

    // if ($(window).width() < 767) {
    //   mobileOnlySlider(".info-card-services", 1, false, false, 767);
    //   mobileOnlySlider(".info-card-container", 2, false, false, 767);
    // }
}

$(function () {
    $('.accommodation-slider').slick({
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  })