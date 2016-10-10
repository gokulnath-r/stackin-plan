$(document).ready (function(){

$('.one').on('click', function(){
	
	$('.content').css("display", "none");
	$('.two, .three').css("display", "none");
	$('.box1').css("display", "block");
	$('.box1').attr("class", "box-fade-in box1 abt-box");
	});	

$('.close').on('click', function(){
	
	$('.content').css("display", "block");
	$('.two, .three').css("display", "block");
	$('.box1').css("display", "none");
	$('.box1').attr("class", "box1 abt-box");

});	

$('.two').on('click', function(){

	$('.content').css("display", "none");
	$('.box2').css("display", "block");
	$('.one, .three').css("display", "none");
	$('.box2').attr("class", "box-fade-in abt-box box2");
});

$('.close').on('click', function(){
	$('.conatent').css("display", "block");
	$('.one, .three').css("display", "block");
	$('.box2').css("display", "none");
	$('.box2').attr("class", "box2 abt-box test1");
});

$('.three').on('click', function(){

	$('.content').css("display", "none");
	$('.box3').css("display", "block");
	$('.one').css("display", "none");
	$('.two').css("display", "none");
	$('.box3').attr("class", "box-fade-in abt-box box3");
});

$('.close').on('click', function(){
	$('.conatent').css("display", "block");
	$('.one').css("display", "block");
	$('.box3').css("display", "none");
	$('.box3').attr("class", "box3 abt-box test1");
});	
	
	
});