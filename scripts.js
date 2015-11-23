
$(document).ready(function(){

	
$(window).scroll(function(){
    $("#sidebar").css("top",Math.max(0,288-$(this).scrollTop()));
});
	
	$('#sidebar div').mouseenter(function(){
	$(this).css('opacity', '1.0');
	});
	$('#sidebar div').mouseleave(function(){
	$(this).css('opacity', '0.85');
	});
	$('#sidebar div').mouseenter(function(){
		$(this).css('cursor', 'pointer');
	});
	$('#sidebar div').mouseleave(function(){
		$(this).css('cursor', 'default');
	});
	$("#d2-a, #d2-b, #d3-a, #d3-b").hide();
	
	$("#d2").hover(function(){
		$("#d2-a, #d2-b").show();
	});
	 
	$('#wall div').mouseenter(function(){
		$(this).css('cursor', 'pointer');
	});
	$('#wall div').mouseleave(function(){
		$(this).css('cursor', 'default');
	});
	
	$('#wall div').mouseenter(function(){
		$(this).css('background-color', 'white');
	});
	
	$('#wall div').mouseleave(function(){
		$(this).css('background-color', '');
	});
  });