//============== fixed manu js =============//

$(window).scroll(function(){
    var scrollAmount = $(window).scrollTop()
    
    if(scrollAmount > 1){
        $(".manubar").addClass("fixed")
    }else{
        $(".manubar").removeClass("fixed")
    }
    
    if(scrollAmount > 300){
      $(".back-top-btn").fadeIn();
    }else{
      $(".back-top-btn").fadeOut();
    }
})

//============== wow js =============//

new WOW().init();


//============== banner slider js =============//

$('.banner-slider').slick({
    dots:false,
    fade:true,
    infinite: true,
    speed:1000,
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows:false, 
          dots:true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:576,
        settings: {
          arrows:false,    
          slidesToShow: 1,
          slidesToScroll: 1,
            dots:true,
        }
      }
    ]
  });

//============== portfolio-part slider js =============//

$('.portfolio-slider').slick({
    dots:false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

//============== venobox js =============//

$('.venobox').venobox(); 

//============== services-part slider js =============//

$('.services-slider').slick({
    dots:false,
    infinite: true,
    vertical:true,
    speed: 1000,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 400,
    centerPadding:0,
    slidesToShow:3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-chevron-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-down next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//============== testimonial-part slider js =============//

$('.testimonial-img-slider').slick({
    dots:false,
    infinite: true,
    vertical:true,
    speed: 400,
    centerMode: true,
    centerPadding:0,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow:3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-chevron-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-down next" aria-hidden="true"></i>',
    asNavFor:'.testimonial-details-slider',
  });

$('.testimonial-details-slider').slick({
    dots:false,
    infinite: true,
    fade:true,
    speed: 400,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows:false,
    asNavFor:'.testimonial-img-slider',
  });



//============== counter up js =============//

$('.counter').counterUp({
                delay: 10,
                time: 1000
            });

//============== team-part slider js =============//

$('.team-slider').slick({
    dots:false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 400,
    slidesToShow:4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


//============== web-link slider js =============//

$('.web-link-slider').slick({
    dots:false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 400,
    centerMode: true,
    centerPadding:0,
    slidesToShow:5,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });