$(document).ready(function(){
	// checkbox
	$('input').not('.default').iCheck({
		checkboxClass: 'check',
		radioClass: 'radio',
		increaseArea: '20%' // optional
	});
	$('.checkbox-holder .checkbox').on('ifChecked', function(event) {
		$(this).closest('.checkbox-holder').addClass('active');
	});
	$('.checkbox-holder .checkbox').on('ifUnchecked', function(event) {
		$(this).closest('.checkbox-holder').removeClass('active');
	});
	// select
	$(".select-holder select").dropdown({
		theme: ""
	});
	// promo gallery
	$('.main-promo-list').bxSlider({
		mode: 'fade',
		pager: false
	});
	initSly();
});

function initSly(){
	var $frame1 = $('.scroll-frame');
	$frame1.each(function(){
			var $wrap1 = $(this).parent();
			$(this).sly({
			horizontal: 0,
			itemNav: 'top',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBar: $wrap1.find('.scrollbar'),
			scrollBy: 100,
			speed: 400,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
		 	dynamicHandle: 1,
			clickBar: 1,
			prevPage: $wrap1.find('.top'),
			nextPage: $wrap1.find('.bottom') 
		});
	});
	setTimeout(function(){
		$frame1.each(function(){
			if ($(this).find('ul').height()-1<$(this).height()){
				$(this).parent().find('.scroll-tools').hide();
			}
		});
	}, 100);
};

