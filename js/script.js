var myCarousel = document.querySelector('#carouselExampleFade')
var carousel = new bootstrap.Carousel(myCarousel, { 
  interval: false
});

//======================================>
$('.carousel-indicators__orange').click(function(){
	$('.svg, .link, .wrapper').removeClass('active');
	$('.svg__orange').addClass('active');
});
$('.carousel-indicators__green').click(function(){
	$('.svg, .link, .wrapper').removeClass('active');
	$('.svg__green').addClass('active');
});
$('.carousel-indicators__yellow').click(function(){
	$('.svg').removeClass('active');
	$('.svg__yellow, .wrapper, .link').addClass('active');
});
$('.carousel-indicators__lightGreen').click(function(){
	$('.svg, .link, .wrapper').removeClass('active');
	$('.svg__lightGreen').addClass('active');
});

