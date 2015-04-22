$(function($){
	//	图片展示区
	var mySwiper = new Swiper('.swiper-container',{
	    pagination: '.pagination',
	    loop:true,
	    grabCursor: true,
	    paginationClickable: true
	})
	$('.arrow-left').click(function(e){
	    e.preventDefault()
	    mySwiper.swipePrev()
	})
	$('.arrow-right').click(function(e){
	    e.preventDefault()
	    mySwiper.swipeNext()
	})
	//首页导航换字
	$('#nav li').hover(function() {
		var chinese = $(this).data('ch');
		$(this).find('h3').html(chinese)
	}, function() {
		var english = $(this).data('en');
		$(this).find('h3').html(english)
	})
	
	// 导航
	var name;
	$('.close-btn').on('click', function() {
		$('.popup-wrap').fadeOut(500);
		$('.popup-wrap .windows').children().hide();
		$('#sub-title').removeClass();
		$('.popup-wrap').removeClass('white');
	})
	$('.group-wrap ul, nav li').on('click', function() {
		name = $(this).data('en').toLowerCase();
		$('.popup-wrap').fadeIn(500);
		$('#sub-title').removeClass().addClass(name);
		$('.popup-wrap').removeClass('white');
	})
	
	//---身份证
	$('.group-wrap .group1, #about').on('click', function() {
		$('.popup-wrap .id-position').fadeIn(500).siblings('div').hide();
		$('.sub-nav.id-sub').fadeIn(500);
	})
	
	$('.sub-nav ul').find('li').hover(function() {
		$(this).stop().animate({'opacity': '1'},100).siblings('li').animate({'opacity': '.3'},100)
	})
	$('.sub-nav .environment3').on('click', function() {
		$('.id-environment').fadeIn(500);
		$('.id-member').hide();
		$('.id-position').hide();
	})
	$('.sub-nav .member3').on('click', function() {
		$('.id-member').fadeIn(500);
		$('.id-environment').hide();
		$('.id-position').hide();
	})
	$('.sub-nav .position3').on('click', function() {
		$('.id-position').fadeIn(500);
		$('.id-member').hide();
		$('.id-environment').hide();
	})
	
	//---技能表
	$('.group-wrap .group4, #tech').on('click', function() {
		$('.popup-wrap .tech-part').fadeIn(500).siblings('div').hide();
		$('.sub-nav.tech-sub').fadeIn(500);
		$('.popup-wrap').addClass('white');
	})
	
	//---联系我
	$('.group-wrap .group5, #contact').on('click', function() {
		$('.popup-wrap .contact-part').fadeIn(500).siblings('div').hide();
		$('.sub-nav.contact-sub').fadeIn(500);
	})
	
}(jQuery));