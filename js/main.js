$(document).ready(function() {
	var typed = new Typed('.typed-1', {
		strings: ['un desarrollador web.', 'un diseñador web.', 'un amante de la tecnología.', 'un editor de videos.', 'un creador de contenido.', 'youtuber.', 'Blank Shadow :v /'],
		typeSpeed:45,
		backSpeed:0,
		startDelay:200,
		backDelay:2200,
		loop:true,
		loopCount:false,
		showCursor:true,
		cursorChar:"_",
		attr:null
	});
	/* ANIMACION DE SCROLL */
	jQuery('.scroll-fotos').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: $(".contenedor-fotos").offset().top}, 600);
		return false;
	});
	jQuery('.scroll-video').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: $(".contenedor-videos").offset().top}, 600);
		return false;
	});
	jQuery('.scroll-body').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: $(".contenedor-general").offset().top}, 600);
		return false;
	});
	/* REDIMENSION DE IMAGENES */
	document.getElementById("img01");
	img01.style.height = img01.clientWidth + "px";
	img01.style.height = img01.scrollWidth + "px";
	document.getElementById("img02");
	img02.style.height = img02.clientWidth + "px";
	img02.style.height = img02.scrollWidth + "px";
	document.getElementById("img03");
	img03.style.height = img03.clientWidth + "px";
	img03.style.height = img03.scrollWidth + "px";
	document.getElementById("img04");
	img04.style.height = img04.clientWidth + "px";
	img04.style.height = img04.scrollWidth + "px";
	document.getElementById("img05");
	img05.style.height = img05.clientWidth + "px";
	img05.style.height = img05.scrollWidth + "px";
	document.getElementById("img06");
	img06.style.height = img06.clientWidth + "px";
	img06.style.height = img06.scrollWidth + "px";
	document.getElementById("video01");
	video01.style.height = video01.clientWidth + "px";
	video01.style.height = video01.scrollWidth + "px";
	document.getElementById("video02");
	video02.style.height = video02.clientWidth + "px";
	video02.style.height = video02.scrollWidth + "px";
	document.getElementById("video03");
	video03.style.height = video03.clientWidth + "px";
	video03.style.height = video03.scrollWidth + "px";
	
	/* MENU RESPONSIVE */
	$('.barra-menu-span').on('click',function(){
		$('.header-menu').slideToggle();
	});
	
	/*DETECTAR SCROLL*/
	var windowHeight = 694;
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > windowHeight){
			$('.contenedor-arrow').addClass('display-block');
		} else{
			$('.contenedor-arrow').removeClass('display-block');
		}
	});
	
	/*PAGINA DE CARGA*/
	$(".contenedor-loading").fadeOut("slow");
});