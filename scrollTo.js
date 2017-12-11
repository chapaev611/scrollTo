$('.js-scroll').on('click', function(e) {
	e.preventDefault();

	var $this = $(this);
	var $scrollId = $this.data('scroll');
	var $scrollToBox = $('#' + $scrollId);
	var $scrollToPosition = $scrollToBox.offset().top;

	$('html, body').animate(function() {
		scrollTop: $scrollToPosition
	}, 500);

});
