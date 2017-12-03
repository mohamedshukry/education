// onmouseover
if ( $(window).width() > 768){
var winH    = $(window).height(),
   topBar  = $('.top-bar').innerHeight(),
   navH    = $('.navbar').innerHeight();
$('.slider, .carousel-item').height(winH - ( topBar + navH ));
}


//======= scroll Up =======//
   $(window).scroll(function () {
       if ($(this).scrollTop() > 150) {
           $('.scrollup').fadeIn('slow');
       }else {
           $('.scrollup').fadeOut('slow');
       }
   });
   $('.scrollup').click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
       return false;
   });



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});


// $(document).ready(function(){
//   $("p").hide(1111);
// });










































// $(function(){
// 	$(document).ready(function(){
// 	    $("#demo").hover(function(){
// 	        $(this).css("opacity", ".5");
// 	        }, function(){
// 	        $(this).css("opacity", "1");
// 	    });
// 	});
// });
