$(document).ready(function() {
    $('.image-frame').hover(function(){
		$('.image-caption',this).slideToggle(4900);
	}, function(){
		$('.image-caption',this).slideToggle(4900);
    });
});