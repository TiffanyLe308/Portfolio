$(document).ready(function() {
  $(".title").lettering();
  $(".button").lettering();
});

$(document).ready(function() {
  animation();
}, 1000);

$('.button').click(function() {
  animation();
});

function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 2.25, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5,
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -50},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}

$('#open-left').click(function(e){
  e.preventDefault();
    $('.split-screen-left').velocity({ translateX: ["50%"]  }, 600);
	$('.split-screen-right').velocity({translateX: ["50%"] }, 600);

	$('#profile-1-text').velocity({width: ["60%", '50%'] }, 600);
	$('#profile-1').velocity({width: ["40%", '50%'] }, 600);

	$('.image-1-initial').velocity({ opacity: [0, 1]  }, 600);
	$('.image-1-transition').velocity({opacity: [1, 0] }, 600);

	$(this).velocity({opacity: [0, 1] }, 200);
})

$('#open-right').click(function(e){
  e.preventDefault();
    $('.split-screen-left').velocity({ translateX: ["-50%"]  }, 600);
	$('.split-screen-right').velocity({translateX: ["-50%"] }, 600);

	$('#profile-2-text').velocity({width: ["60%", '50%'] }, 600);
	$('#profile-2').velocity({width: ["40%", '50%'] }, 600);

	$('.image-2-initial').velocity({ opacity: [0, 1]  }, 600);
	$('.image-2-transition').velocity({opacity: [1, 0] }, 600);

	$(this).velocity({opacity: [0, 1] }, 100);
})

$('.close-right').click(function(){
	 $('.split-screen-left').velocity({ translateX: 0  }, 600);
	$('.split-screen-right').velocity({translateX: 0 }, 600);

	$('#profile-1-text').velocity({width: ['50%', "60%"] }, 600);
	$('#profile-1').velocity({width: ['50%', "40%"] }, 600);

	$('.image-1-initial').velocity({ opacity: [1, 0]  }, 600);
	$('.image-1-transition').velocity({opacity: [0, 1] }, 600);

	$('#open-left').velocity(
		{opacity: [1,0]},
		{delay: 100, duration: 100}
	)
})

$('.close-left').click(function(){
	 $('.split-screen-left').velocity({ translateX: 0  }, 600);
	$('.split-screen-right').velocity({translateX: 0 }, 600);

	$('#profile-2-text').velocity({width: ['50%', "60%"] }, 600);
	$('#profile-2').velocity({width: ['50%', "40%"] }, 600);

	$('.image-2-initial').velocity({ opacity: [1, 0]  }, 600);
	$('.image-2-transition').velocity({opacity: [0, 1] }, 600);

	$('#open-right').velocity(
		{opacity: [1,0]},
		{delay: 100, duration: 100}
	)
})
