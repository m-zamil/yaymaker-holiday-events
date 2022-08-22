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
            items: 1.2,
            stagePadding: 20,
          },
          960: {
            items: 3,
            nav:false,
            loop:false,
            center:false,
            stagePadding:0
          },
        },
      });
    });
  };