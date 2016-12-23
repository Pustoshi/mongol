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

  $('#clock').countdown('2020/10/10', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span>%w</span> weeks '
      + '<span>%d</span> days '
      + '<span>%H</span> hr '
      + '<span>%M</span> min '
      + '<span>%S</span> sec'));
  });







});
