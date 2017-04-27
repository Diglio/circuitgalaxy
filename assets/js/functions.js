$(document).ready(function(){
  $('.hamburger').click(function(){
		$(this).toggleClass('open');
    $('.mobile-nav').toggleClass('open');
	});
});
