var position = 0;
var dir = 1;
// var hscore = 0;
var numofclicks = 0;
var lives= 3;
var skip = true;

var rotate = function() {
	//console.log(dir, Math.abs(position % 360));
	position += 1 * dir;
	$('.dial').css({'transform':'rotateZ('+position+'deg)'});
	if (((dir == 1 && Math.abs(position % 360) == 6) && skip) || ((dir == -1 && Math.abs(position % 360) == 356) && skip)) {
		skip = false;
	}
	else if (dir == 1 && Math.abs(position % 360) == 6 && !skip) {
		takelife();
	}
	else if (dir == -1 && Math.abs(position % 360) == 356 && !skip) {
		takelife();
	}
};

var takelife = function() {
	lives = (lives - 1);
	$('#lives').text(lives);
	if (lives <1) {
		window.location.replace("index2.html");
	}
}



timer = setInterval(rotate, 12);



$('#lives').text(lives);
$('#count').text(numofclicks);

// $('.lives span').text(marqueeWidth);


	$('body').on('keydown', function(e){
		console.log(e.keyCode)
		if(e.keyCode == 32){
			if (Math.abs(position % 360) >= 356 || Math.abs(position % 360) <= 5) {
				console.log(Math.abs(position % 360), "YES")
				dir *= -1;

				skip = true;
				// $('.target').css({'transform':'rotateZ(180deg)'});


				numofclicks = (numofclicks + 1);
				$('#count').text(numofclicks);
			}

			else {
				console.log(Math.abs(position % 360), "NO")
				// dir = 0;

				// $('.middle-circle').addClass('red');

				$(".middle-circle").addClass("red").delay(250).queue(function(next){
				    $(this).removeClass("red");
				    next();
				});


				takelife()
			}

			
			
	};



//  

	// if (numofclicks >) 
	// 	hscore = (numofclicks + 1);

// $('.hscore').text(hscore);

	// function logScore(score) {
 //    if (score > localStorage.getItem('score'))
 //      localStorage.setItem('score', score);
 //    $('.score span.count').text(score);
 //  }
 //  loadScore()

 //  function loadScore() {
 //    $('.score span.hscore').text(localStorage.getItem('score') ? localStorage.getItem('score') : 0);
 //    $('.score span.count').text(0);
 //  }



	});

