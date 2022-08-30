window.onload = function () {
    $(document).ready(function () {
      $(".carousel-1").owlCarousel({
        loop:true,
        margin: 0,
        nav: true,
        navText: ["<img src='https://s3fstest.paintnite.com/fresca-web-html/yaymaker/motivational-minutes/assets/images/slider/carrot-left.png'>", "<img src='https://s3fstest.paintnite.com/fresca-web-html/yaymaker/motivational-minutes/assets/images/slider/carrot-right.png'>"],
        dots: false,
        center: true,
        stagePadding: 0,
        responsive: {
          0: {
            items: 1,
            stagePadding: 50,
            autoHeight:true,

          },
          960: {
            items: 3,
            nav:false,
            loop:false,
            center:false,
            stagePadding:0,
            autoHeight:false,

          },
        },
      });
      $(".carousel-2").owlCarousel({
        loop:true,
        margin: 20,
        nav: false,
        dots: true,
        center: true,
        stagePadding: 0,
        responsive: {
          0: {
            items: 1.3,
            stagePadding: 20,
          },
          500:{
            items:1.5,
          },
          700:{
            items:2,
          },
          767:{
            items:3,
          },
          960: {
            margin:50,
            items: 3,
            loop:true,
            center:false,
            dotsEach: 1,
            stagePadding:0
          },
        },
      });
    });
  };