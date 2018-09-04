$(document).ready(function(){
	$('.header__nav-btn').click(function(){
		$('.header__nav').slideToggle();
		$('.header__nav-btn span').toggleClass('active');
	});
});