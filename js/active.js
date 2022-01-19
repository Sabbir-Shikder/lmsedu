(function ($) {
	"use strict";
	// css preloader 
	$(window).on('load', function () {
		$("#loading").fadeOut(500);
	});
	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});
	// mobile menu jq active 
	$("#offcanvas").offcanvasmenu({
	 	menuTrigger: "trigger",
	 	position: "left",
	 	speed: "0.3",
	 	width: "220px"
	 });
	// owl carousel for brnads area 
	$('.blogs-active').owlCarousel({
		loop: true,
		margin: 18,
		items: 3,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		},
	});
	// owl carousel for brnads area 
	$('.brands-active').owlCarousel({
		loop: true,
		margin: 5,
		items: 4,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			250: {
				items: 1
			},
			425: {
				items: 2
			},
			768: {
				items: 3
			},
			1000: {
				items: 5
			}
		},
	});
	// owl-carousel for testimonial 
	$('.test-slider-active').owlCarousel({
		loop: true,
		margin: 5,
		items: 1,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: false,
		dots: false,
	});
	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});
	// css preloader 
	$(window).on('load', function () {
		//$("#loading").delay(2000).fadeOut(500);
		$("#loading").fadeOut(500);
	});
	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
})(jQuery);