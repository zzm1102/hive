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
	//-----导航明暗效果
//	$('.sub-nav ul').find('li').hover(function() {
//		$(this).stop().animate({'opacity': '1'},100).siblings('li').stop().animate({'opacity': '.3'},100)
//	}, function() {
//		$(this).animate({'opacity': '.3'},100);
//	}).click(function() {
//		$(this).css('opacity','1');
//	})
	$('.sub-nav .environment3').on('click', function() {
		$('.id-environment').fadeIn(500);
		$('.id-member').hide();
		$('.id-position').hide();
		$(this).addClass('opacity').siblings('li').removeClass('opacity');
	})
	$('.sub-nav .member3').on('click', function() {
		$('.id-member').fadeIn(500);
		$('.id-environment').hide();
		$('.id-position').hide();
		$(this).addClass('opacity').siblings('li').removeClass('opacity');
	})
	$('.sub-nav .position3').on('click', function() {
		$('.id-position').fadeIn(500);
		$('.id-member').hide();
		$('.id-environment').hide();
		$(this).addClass('opacity').siblings('li').removeClass('opacity');
	})
	
	//---朋友圈
	$('.group-wrap .group2, #client').on('click', function() {
		$('.popup-wrap .client-part').fadeIn(500).siblings('div').hide();
		$('.sub-nav.client-sub').fadeIn(500);
	})
	
	//---履历表
	$('.group-wrap .group3, #works').on('click', function() {
		$('.popup-wrap .works-part').fadeIn(500).siblings('div').hide();
		$('.sub-nav.works-sub').fadeIn(500);
	})
	
	$('.sub-nav .operate').on('click', function() {
		$('.works-operating').fadeIn(500);
		$('.works-marketing').hide();
		$('.works-creative').hide();
	})
	$('.sub-nav .marketing').on('click', function() {
		$('.works-marketing').fadeIn(500);
		$('.works-operating').hide();
		$('.works-creative').hide();
	})
	$('.sub-nav .creative').on('click', function() {
		$('.works-creative').fadeIn(500);
		$('.works-operating').hide();
		$('.works-marketing').hide();
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