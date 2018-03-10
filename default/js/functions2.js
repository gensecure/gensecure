$(function() {

  	var wWidth = $(window).width();

  	if (wWidth < 769) {
  		$('#navigation ul').hide();
  	}else {
  		$('#navigation ul').show();
  	}

  	$(window).resize(function(){
  		var wWidth = $(window).width();
  		if (wWidth < 769) {
  			$('#navigation ul').hide();
  		}else {
  			$('#navigation ul').show();
  		}
  	});

  	
  	$('#navigation a.nav-btn').on('click', function(){
  		$(this).parent().find('ul').stop(true,true).slideToggle();
  		$(this).find('span').toggleClass('active')
  		return false;
  	});
 
	
	if ($('.slider2').length) {
		$('.slider2 .carousel').carouFredSel({
			responsive: true,
			align: 'center',
			scroll: 1,
			prev: ".prev",
			next: ".next",
			auto: false,
		 	pagination: '.pagination2'
		});
	};

	if ($('#partners-slider').length) {
		$('#partners-slider .slider-holder2').carouFredSel({
			align: 'center',
		    items: {
				visible: "variable",
				width: "variable"
			},
			scroll: 1,
			prev: ".prev-arr",
			next: ".next-arr"
		});
	};
});