var position = 0;
var dir = 1;
var rotate = function() {
	//console.log(position);
	position += 1 * dir;
	$('.dial').css({'transform':'rotateZ('+position+'deg)'});
};

timer = setInterval(rotate, 12);

var numofclicks = 0;

	$('body').on('keydown', function(e){
		console.log(e.keyCode)
		if(e.keyCode == 32){
			if (Math.abs(position % 360) >= 356 || Math.abs(position % 360) <= 5) {
				console.log(Math.abs(position % 360), "YES")
				dir *= -1;

				numofclicks = (numofclicks + 1);
				$('.count').text(numofclicks);
			}
			else {
				console.log(Math.abs(position % 360), "NO")
				dir = 0;
				alert("YOU LOSE!");
			}

			
		};



	});

