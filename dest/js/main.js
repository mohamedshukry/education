// onmouseover
if ( $(window).width() > 768){
var winH    = $(window).height(),
   topBar  = $('.top-bar').innerHeight(),
   navH    = $('.navbar').innerHeight();
$('.slider, .carousel-item').height(winH - ( topBar + navH ));
}


















































// $(function(){
// 	$(document).ready(function(){
// 	    $("#demo").hover(function(){
// 	        $(this).css("opacity", ".5");
// 	        }, function(){
// 	        $(this).css("opacity", "1");
// 	    });
// 	});
// });
