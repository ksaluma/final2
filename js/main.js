var position = 0;
var dir = 1;
var rotate = function() {
	console.log(position);
	position += 1 * dir;
	$('.dial').css({'transform':'rotateZ('+position+'deg)'});
};

setInterval(rotate, 12);

var numofclicks = 0;

	$('body').on('keyup', function(e){
		console.log(e.keyCode)
		if(e.keyCode == 32){
			dir *= -1;
		};

	numofclicks = (numofclicks + 1);

	$('.count').text(numofclicks);


	});

