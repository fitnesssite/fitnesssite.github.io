
$(document).ready(function(){



/*function for scroll bar*/




	/* sidebar animations */
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
	

	$(function() {
		$("#d6").menu();
	});
	
$("#d6 div").hide();

$("#d6").mouseenter(function(){
	$(this).children().show('medium');
});

$("#d6").mouseleave(function(){
	$(this).children('div').hide('medium');
});

$("#d2 div").hide();

$("#d2").mouseenter(function(){
	$(this).children().show('medium');
});

$("#d2").mouseleave(function(){
	$(this).children('div').hide('medium');
});



	
	
	 /* homepage grid animations */
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
	
	
	/* fact fan info */
		$(".fan div").mouseenter(function(){
		$(this).css('cursor', 'pointer');
});

$(".fan div").mouseleave(function(){
		$(this).css('cursor', 'default');
});
	
		$(".fan div p").hide();
		
		$(".fan div").click(function(){
		$(this).children().toggle('slow');
});



		
	/* random workout generator */
		var arms = ['3 x 10 Preacher Curls', '3 x 10 Tricep Extensions', '4 x 8 Straight Bar Curls', '5 x 10 E-Z Bar Curls', '40 Close-grip pushups'];
		
		var legs =	['4 x 8 Front Squats', '3 x 12 Leg Extensions', '3 x 12 Leg Curls', '200 meters of lunges', '100 Air Squats'];
		
		var core =	['3 x 1 min. Plank', '50 Scissor Kicks', '5 minutes of M-Climbers', '50 Leg Raises', '5 x 1 minute Bicycle Kicks'];
		
		var back =	['3 x 8 Barbell Row', '3 x 12 Pull-Up', '3 x 8 Chin-Ups', '3 x 8 Rear-Deltoid Fly'];
		
		var chest =  ['3 x 12 Decline Chest Press', '4 x 8 Bench Press', '3 x 10 Cable Flies', '4 x 30 Pushups', '4 x 8 Incline Press'];
		
		var cardio = ['15 minute jog', '10 x 100m sprints', '200m Butt Kicks', '200m Power Skips', '200 Jumping Jacks'];
		
	
	
	var exarm = arms[Math.floor(Math.random() * arms.length)];
	document.getElementById('a1').innerHTML += exarm;
	
	var exleg = legs[Math.floor(Math.random() * legs.length)];
	document.getElementById('a2').innerHTML += exleg;
	
	var excore = core[Math.floor(Math.random() * core.length)];
	document.getElementById('a3').innerHTML += excore;
	
	var exback = back[Math.floor(Math.random() * back.length)];
	document.getElementById('b1').innerHTML += exback;
	
	var exchest = chest[Math.floor(Math.random() * chest.length)];
	document.getElementById('b2').innerHTML += exchest;
	
	var excardio = cardio[Math.floor(Math.random() * cardio.length)];
	document.getElementById('b3').innerHTML += excardio;
	
	
	/* random log generator */
	var stretchFact = ['Stretching exercises improve the flow of blood around your body. Improving your circulation means that more blood and oxygen are reaching your muscles and your brain. This can help avoid injuries in a workout and it’s also why it feels so good when we stretch first thing in the morning.', 'It may come as a surprise that stretching also helps patients with conditions such as diabetes and depression. In fact, recent studies by researchers at The Ohio State University Wexner Medical Center show that stretching during yoga classes can even benefit women who are battling breast cancer.', 'It is just as important, if not more so, to stretch after you exercise. Stretching while the muscles are already loose from a workout will help you recover faster and prevent injuries.', 'Women are generally more flexible than men of the same age.'];
	var rand = stretchFact[Math.floor(Math.random() * stretchFact.length)];
	
	document.getElementById('log').innerHTML += rand;
	
	
	/* scrollify */

	
	
	/* close tag */
  });
  