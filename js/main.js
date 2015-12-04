var position = 0;
var dir = 1;
var rotate = function() {
	//console.log(position);
	position += 1 * dir;
	$('.dial').css({'transform':'rotateZ('+position+'deg)'});
};

timer = setInterval(rotate, 12);


// var hscore = 0;
var numofclicks = 0;
var lives= 3;

// $('.lives span').text(marqueeWidth);


	$('body').on('keydown', function(e){
		console.log(e.keyCode)
		if(e.keyCode == 32){
			if (Math.abs(position % 360) >= 356 || Math.abs(position % 360) <= 5) {
				console.log(Math.abs(position % 360), "YES")
				dir *= -1;


				// $('.target').css({'transform':'rotateZ(180deg)'});


				numofclicks = (numofclicks + 1);
				$('#count').text(numofclicks);
			}

			else {
				console.log(Math.abs(position % 360), "NO")
				// dir = 0;

				lives = (lives - 1);
				$('#lives').text(lives);
			}

			if (lives <1) {
				// alert("YOU LOSE!");
				window.location.replace("index2.html");
			}
			
		};

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

