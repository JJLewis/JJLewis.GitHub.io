/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function(){
  $("#portfolio .owl-carousel").owlCarousel({
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        items:1,
        margin:0,
        stagePadding:0,
        smartSpeed:450,
        autoWidth:false,
        autoplay:true,
      autoplayTimeout:5000,
      loop:true
  });
    $("#bio .owl-carousel").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'slideInRight',
        items:2,
        margin:0,
        stagePadding:0,
        smartSpeed:450,
        autoWidth:false,
        autoHeight:false,
        autoplay:true,
        autoplayTimeout:5000,
        loop:true,
        nav:true,
        navText:[
            "<i class='btn btn-xl col-xs-2 fa fa-arrow-left'></i>",
            "<i class='btn btn-xl col-xs-2 col-xs-push-8 fa fa-arrow-right'></i>"
        ]
  });
});
