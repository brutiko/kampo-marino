$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#first-container-produto');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').css('background-color','#44384f');
          $('#navbar').addClass('navbar-brand-scroll');
          $('.logo').css('margin', '10px 0');
          $('.product-detail li a').css('color','#ffffff');
          $('.product-detail li a').addClass('navbar-link-style');
          $('.product-detail li a').removeClass('navbar-no-bg');
       } else {
          $('#navbar').css('background-color', 'transparent');
          $('#navbar').removeClass('navbar-brand-scroll');
          $('.logo').css('margin', '20px 0');
          $('.product-detail li a').css('color','#333333');
          $('.product-detail li a').addClass('navbar-no-bg');
          $('.product-detail li a').removeClass('navbar-link-style');
       }
   });
});
