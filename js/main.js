var count = 0;
var navParent;

$('.main a').on('click', function(e){
	count++; //increase count variable
	var choice = $(this).attr('class');
	var parentChoice = $(this).closest('.choiceset');
	var nextChoice = parentChoice.next();
	var choiceCount = choice + count;
	navParent = $(this).data("id");
	
	e.preventDefault();
	$('.journey-slider').slick('unslick');// destroy slider
	
    parentChoice.toggleClass("choicevisible");//get & hide current choiceset
    $('nav').show();//show navigation
    $('img#plane').show().removeClass().toggleClass('plane-' + choice);//show plane & append animation class
    $('#background-wrap').removeClass();
    $('#background-wrap').toggleClass(choiceCount);//add background color class & show next choiceset
    nextChoice.toggleClass("choicevisible");//get & show next choiceset
    $('.choicevisible .content-' + choice).show();//get & display relevant content
    $( ".journey-navigator ul li" ).removeClass();//remove all actives
    $( '#' + navParent ).addClass('active');//update active li to current stage
    $(".plane-path img").attr('class', 'position' + count);//move nav-plane
    $('.journey-slider').slick();// rebuild slider
});


$(document).ready(function() {
	// Get the modal
	var modal = $('.modal');

	$('nav').on('click', 'li.active', function(e) 
	{ 
		e.preventDefault();
		modal.show();
		$( '#' + navParent ).addClass('md-active');
	});
	$('span.close').click(function(e) 
	{ 
		modal.hide();
		$( '#' + navParent ).removeClass('md-active');
	});
});
