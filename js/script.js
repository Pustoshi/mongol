$(document).ready(function() {

  
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })

  $('.smoothScroll').click(function(event) {
    event.preventDefault();
    var href=$(this).attr('href');
    var target=$(href);
    var top=target.offset().top;
    $('html,body').animate({
      scrollTop: top
    }, 1000);
    });

  $(function () {
    var austDay = new Date();                               // сегодняшняя дата
    austDay = new Date(austDay.getFullYear() + 1, 0, 1);    // дата, до которой считаем
    // console.log(austDay);
    $('#countdown').countdown({until: austDay, padZeroes: true});
  });

  var scene =document.getElementById('fly__scene')
  var parallax = new Parallax(scene);

});
