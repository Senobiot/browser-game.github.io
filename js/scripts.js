$(window).on('load', function () {
	$('.preloader-wrapper').delay(500).fadeOut('slow');
	$(".preloadall").css("display", "none");
});


$(document).ready(function() {
	// ==========================burger-menu=========================================
	$(".burger-menu").click(function(){
		$(this).toggleClass("active");
		$(".main-page__header__menu").toggleClass("active");
		$("body").toggleClass("lock");
	});

	/*======================Language Selector===========================*/
	$(".main-page__header__lang").click(function(){
		$(".select").toggleClass("active");
	});
	$(".select div").click(function(){
		$(".main-page__header__lang > div:first-child").prependTo($(".select"));
		$(this).prependTo($(".main-page__header__lang"));
	});
	$(".eng").click(function(){
		$(".main-page__header__lang > div:first-child").prependTo($(".select"));
		$(this).prependTo($(".main-page__header__lang"));
	});

	// ============================Slider=======================
	let slide_qty = $(".about-page__content__slider_screens > div").length;
		
	for (let i = 0; i < slide_qty; i++) {
		if (i == 0) {
			$(".about-page__content__slider_dots").append("<div class='dot active'><div>");
		} else {
			$(".about-page__content__slider_dots").append("<div class='dot'><div>");}
	};

	let dots = $(".about-page__content__slider_dots").children();
	$(".about-page__content__slider_switch").click(function(){
		$(".screen").first().appendTo(".about-page__content__slider_screens");
		let dots_ind = $(".dot.active").last().index();
		if (dots_ind < slide_qty - 1) {
			$(dots[++dots_ind]).addClass("active");
		} else {
			$(".dot.active").removeClass("active");
			$(dots[0]).addClass("active");
			dots_ind = 0;
		}
	});

	let slides_order = $(".about-page__content__slider_screens").children();
	$(".dot").click(function(){
		$(this).addClass("active");
		$(this).prevAll().addClass("active");
		$(this).nextAll().removeClass("active");
		let index = $(this).index();
		console.log(index);
		if (index == 0) {
			$(slides_order).prependTo(".about-page__content__slider_screens");
		} else {
			$(slides_order[index-1]).nextAll().prependTo(".about-page__content__slider_screens");
		}
	});

	// ================ feature switcher =====================
	$(".feature").click(function(){
		$(".feature").removeClass("active");
		$(this).addClass("active");
	});

	// ===================Load Quotes===================
	$(".quotes-page__content__description_button").click(function(){
		$(".quotes-page__content__posts .user:nth-child(n+4)").prependTo(".quotes-page__content__posts");
	});

	//==================Navigation=========================
	$(".main-page__header__menu_link, .subscribe-page__footer .menu_link").click(function(event){
		event.preventDefault();
		let page_id=$(this).attr("href");
		let offset =$(page_id).offset().top;
		$(".burger-menu, .main-page__header__menu").removeClass("active");
		$("body").removeClass("lock");
		$("body, html").animate({scrollTop : offset}, 1000);
	});

	// ========================Home Page Arrow Down========
	$(".main-page_arrow-down").click(function(){
		let offset = $(".about-page").offset().top;
		$("body, html").animate({scrollTop : offset}, 1000);
	});
});