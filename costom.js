$(window).scroll(function (){
    $(".head-anime").each(function(){
      var hit		= $(this).offset().top;
      var scroll	= $(window).scrollTop();
      var wHeight	= $(window).height();
  
      if (scroll > hit - wHeight + wHeight/100){
        $(this).addClass("active");
      }
    });
  });