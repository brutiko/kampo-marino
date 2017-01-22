$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#first-container');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').css('background-color','#44384f');
          $('#navbar').addClass('navbar-brand-scroll');
          $('.logo').css('margin', '10px 0');
       } else {
          $('#navbar').css('background-color', 'transparent');
          $('#navbar').removeClass('navbar-brand-scroll');
          $('.logo').css('margin', '20px 0');
       }
   });
});

