



$(document).ready(function() {





	$('.er').click(function(){

		if ($('.tcheads').is(":visible")) {

			$('.tcheads').css('display','none');

		}

		if ($('.erheads').is(":visible")) {

			$('.erheads').css('display','none');

		}else{

			$('.erheads').css('display','block');

			$(window).scrollTop(2000);

		}

	});

$('.hr').click(function(){

		

			$('.tcheads').css('display','none');
			$('.erheads').css('display','none');
		

		
	});

$('.ac').click(function(){

		$('.tcheads').css('display','none');
			$('.erheads').css('display','none');
		

	});







	$('.tc').click(function(){

		if ($('.erheads').is(":visible")) {

			$('.erheads').css('display','none');

		}

		if ($('.tcheads').is(":visible")) {

			$('.tcheads').css('display','none');

		}else{

			$('.tcheads').css('display','block');

			$(window).scrollTop(2000);

		}

	});



});