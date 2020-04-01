'use strict';
/*global jQuery*/

window.addEventListener('DOMContentLoaded', function(){
  /** jQueryの処理 */
  $(window).load(function() {
	    $("body").removeClass("preload");
	});


var _window = $(window),
    _header = $('.header_nav'),
    heroBottom;

	_window.on('scroll',function(){
	    heroBottom = $('.hero').height();
	    if(_window.scrollTop() > heroBottom){
	        $('.header_nav').addClass('fixed');
	    }
	    else{
	        $('.header_nav').removeClass('fixed');
	    }
});

jQuery(function($){

	$(window).load(function() {
	    $("body").removeClass("preload");
	});


var _window = $(window),
    _header = $('.header_nav'),
    heroBottom;

	_window.on('scroll',function(){
	    heroBottom = $('.hero').height();
	    if(_window.scrollTop() > heroBottom){
	        $('.header_nav').addClass('fixed');
	    }
	    else{
	        $('.header_nav').removeClass('fixed');
	    }
	});

	_window.trigger('scroll');

$(function() {
　$('.Toggle').click(function() {
　　$(this).toggleClass('active');

　if ($(this).hasClass('active')) {
　　$('.NavMenu').addClass('active');　 //クラスを付与
　} else {
　　$('.NavMenu').removeClass('active'); //クラスを外す
　}
　});
});

$('.socialBtn li a').click(function(){
	window.open(this.href,'popup','width=600,height=300');
	return false;
	});


});
});