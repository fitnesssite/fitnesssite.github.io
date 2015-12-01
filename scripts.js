
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
	$("#d2-a, #d2-b, #d3-a, #d3-b").hide();
	
	$("#d2").hover(function(){
		$("#d2-a, #d2-b").show();
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

		
		
		
		

	
	
	
	/* random log generator */
	var stretchFact = ['Stretching exercises improve the flow of blood around your body. Improving your circulation means that more blood and oxygen are reaching your muscles and your brain. This can help avoid injuries in a workout and it’s also why it feels so good when we stretch first thing in the morning.', 'It may come as a surprise that stretching also helps patients with conditions such as diabetes and depression. In fact, recent studies by researchers at The Ohio State University Wexner Medical Center show that stretching during yoga classes can even benefit women who are battling breast cancer.', 'It is just as important, if not more so, to stretch after you exercise. Stretching while the muscles are already loose from a workout will help you recover faster and prevent injuries.', 'Women are generally more flexible than men of the same age.' ];
	var rand = stretchFact[Math.floor(Math.random() * stretchFact.length)];
	
	document.getElementById('log').innerHTML += rand;
	
	
	/* scrollify */
	 $(document).ready(function() {
        $('#fullpage').fullpage();
    });
	
	
	/* close tag */
  });
  