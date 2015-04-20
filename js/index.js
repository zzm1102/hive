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
	
	// 导航
	$('.close-btn').on('click', function() {
		$('.popup-wrap').fadeOut(500);
	})
		//身份证
	$('.group-wrap .group1, #ID').on('click', function() {
		$('.popup-wrap').fadeIn(500);
		$('.popup-wrap .id-position').fadeIn(500);
	})
	
}(jQuery));